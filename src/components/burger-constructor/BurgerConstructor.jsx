import React from "react";
import styles from "./burger-constructor.module.css";
import image from "../../images/price.svg";
import Modal from "../modal/Modal";
import OrderDetails from "../order-details/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import { openOrderPopup } from "../../services/store/popupOrderRecucer/actions";
import { useDrop } from "react-dnd";
import { closeIngredientPopup } from "../../services/store/popupIngredientsReducer/actions";
import { closeOrderPopup } from "../../services/store/popupOrderRecucer/actions";
import { clearIngredient } from "../../services/store/IngredientDetailsReducer/actions";
import { fetchOrderPost } from "../../services/store/asyncActions";
import {
  addIngredientConstuctor,
  addBunIngredientConstuctor,
} from "../../services/store/BurgerConstructorReducer/actions";
import BurgerConstructorPlaceholder from "../burger-constructor-placeholder/BurgerConstructorPlaceholder";
import DragCard from "./drag-card/DragCard";
import { getIsOpenCloseOrderPopup } from "../../services/store/popupOrderRecucer/selectors";
import {
  getBurgerConsructorBun,
  getBurgerConstructorList,
  elementIsDrag,
} from "../../services/store/BurgerConstructorReducer/selectors";
import {
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = () => {
  const isOpenCloseOrderPopup = useSelector(getIsOpenCloseOrderPopup);

  const BurgerConstructorList = useSelector(getBurgerConstructorList);
  const BurgerConsructorBun = useSelector(getBurgerConsructorBun);
  const elementDrag = useSelector(elementIsDrag);

  const borderColor = elementDrag ? "#4c4cff" : "#000";

  const dispatch = useDispatch();

  const handelPost = () => {
    let ingredientsIdList = BurgerConstructorList.map((item) => item._id);
    if (BurgerConsructorBun) {
      ingredientsIdList = [
        BurgerConsructorBun._id,
        ...ingredientsIdList,
        BurgerConsructorBun._id,
      ];
    } else {
      ingredientsIdList = [...ingredientsIdList];
    }
    dispatch(fetchOrderPost(ingredientsIdList));
  };

  const handlerModelOpen = () => {
    handelPost();
    dispatch(openOrderPopup());
  };

  function handlerModelClose(e) {
    e.stopPropagation();
    if (
      e.target.dataset.overlay === "overlay" ||
      e.currentTarget.type === "button" ||
      e.key === "Escape"
    ) {
      dispatch(closeIngredientPopup());
      dispatch(closeOrderPopup());
      dispatch(clearIngredient());
    }
  }

  const onDropHandler = (item) => {
    if (item.type === "bun") {
      return dispatch(addBunIngredientConstuctor(item));
    }
    return dispatch(addIngredientConstuctor(item));
  };

  const [, dropRef] = useDrop({
    accept: "ingridient",
    drop(item) {
      onDropHandler(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const price = React.useMemo(() => {
    return (
      (BurgerConsructorBun ? BurgerConsructorBun.price * 2 : 0) +
      BurgerConstructorList.reduce((sum, value) => sum + value.price, 0)
    );
  }, [BurgerConsructorBun, BurgerConstructorList]);

  return (
    <section className={`${styles.section}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: "16px",
        }}
        ref={dropRef}
      >
        {BurgerConsructorBun ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={BurgerConsructorBun && `${BurgerConsructorBun.name} (верх)`}
            price={BurgerConsructorBun && BurgerConsructorBun.price}
            thumbnail={BurgerConsructorBun && BurgerConsructorBun.image}
          />
        ) : (
          <BurgerConstructorPlaceholder
            title="Выберите начинку"
            borderColor={borderColor}
            type="top"
          />
        )}

        <ul className={`${styles.list} custom-scroll`}>
          {BurgerConstructorList.length !== 0 ? (
            BurgerConstructorList.map((item, index) => {
              return (
                <DragCard
                  styles={styles.listItem}
                  key={item.key}
                  item={item}
                  id={item._id}
                  index={index}
                />
              );
            })
          ) : (
            <BurgerConstructorPlaceholder
              title="Выберите начинку"
              borderColor={borderColor}
              type="middle"
            />
          )}
        </ul>
        {BurgerConsructorBun ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={BurgerConsructorBun && `${BurgerConsructorBun.name} (низ)`}
            price={BurgerConsructorBun && BurgerConsructorBun.price}
            thumbnail={BurgerConsructorBun && BurgerConsructorBun.image}
          />
        ) : (
          <BurgerConstructorPlaceholder
            title="Выберите начинку"
            borderColor={borderColor}
            type="bottom"
          />
        )}
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.priceContainer}>
          <span className={`${styles.span} text text_type_digits-medium`}>
            {price}
          </span>
          <img src={image} alt="" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handlerModelOpen}
          disabled={
            BurgerConstructorList.length !== 0 && BurgerConsructorBun !== null
              ? false
              : true
          }
        >
          Оформить заказ
        </Button>
      </div>
      {isOpenCloseOrderPopup && (
        <Modal handlerModelClose={handlerModelClose}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

export default BurgerConstructor;
