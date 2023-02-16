import React from "react";
import styles from "./burger-constructor.module.css";
import image from "../../images/price.svg";
import PropTypes from "prop-types";
import { ingridientPropType } from "../../utils/propType";

import {
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ ingredients }) => {
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
          {ingredients.map((item, index) => {
            return (
              <li className={`${styles.listItem}`} key={index}>
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
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingridientPropType).isRequired,
};
export default BurgerConstructor;
