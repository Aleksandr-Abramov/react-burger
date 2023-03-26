import React from "react";
import styles from "./burger-constructor.module.css";
import image from "../../images/price.svg";
//import PropTypes from "prop-types";
//import { ingridientPropType } from "../../utils/propType";
import Modal from "../modal/Modal";
import OrderDetails from "../order-details/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import { openOrderPopup } from "../../services/actions/popupOrderRecucer";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import {
  addIngredientConstuctor,
  addBunIngredientConstuctor,
} from "../../services/actions/BurgerConstructorReducer";
import BurgerConstructorPlaceholder from "../burger-constructor-placeholder/BurgerConstructorPlaceholder";
import DragCard from "./drag-card/DragCard";

import {
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = () => {
  const isOpenCloseOrderPopup = useSelector(
    (state) => state.popupOrderReducer.isOpenCloseOrder
  );
  const BurgerConstructorList = useSelector(
    (state) => state.BurgerConstructorReducer.ingredients
  );
  const BurgerConsructorBun = useSelector(
    (state) => state.BurgerConstructorReducer.bun
  );
  const elementDrag = useSelector(
    (state) => state.BurgerConstructorReducer.isDrag
  );
  const borderColor = elementDrag ? "#4c4cff" : "#000";

  const dispatch = useDispatch();

  const handlerModelOpen = () => {
    dispatch(openOrderPopup());
  };

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
            text={BurgerConsructorBun && BurgerConsructorBun.name}
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
              // item.re = index;
              if (item.type === "bun") {
                return null;
              }
              return (
                <DragCard
                  styles={styles.listItem}
                  key={uuidv4()}
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
            text={BurgerConsructorBun && BurgerConsructorBun.name}
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
            23
          </span>
          <img src={image} alt="" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handlerModelOpen}
        >
          Оформить заказ
        </Button>
      </div>
      {isOpenCloseOrderPopup && (
        <Modal>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
};

// BurgerConstructor.propTypes = {
//   ingredients: PropTypes.arrayOf(ingridientPropType).isRequired,
//   handlerModelOpen: PropTypes.func.isRequired,
// };
export default BurgerConstructor;
