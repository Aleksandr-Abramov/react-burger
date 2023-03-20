import React from "react";
import styles from "./burger-constructor.module.css";
import image from "../../images/price.svg";
//import PropTypes from "prop-types";
//import { ingridientPropType } from "../../utils/propType";
import Modal from "../modal/Modal";
import OrderDetails from "../order-details/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import { openOrderPopup } from "../../services/actions/popupOrderRecucer";

import {
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";


const BurgerConstructor = ({
  handlerModelClose,
}) => {
  const isOpenCloseOrderPopup = useSelector((state) => state.popupOrderReducer.isOpenCloseOrder)
  const ingredients = useSelector((state) => state.BurgerIngredientsReducer.ingredients)
  const dispatch = useDispatch()

  const handlerModelOpen = () => {
    dispatch(openOrderPopup());
  }
  return (
    <section className={`${styles.section}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: "16px",
        }}
      >
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />

        <ul className={`${styles.list} custom-scroll`}>
          {ingredients.map((item) => {
            return (
              <li className={`${styles.listItem}`} key={item._id}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            );
          })}
        </ul>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
        />
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
