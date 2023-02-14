import React from "react";
import styles from "./burger-ingredients.module.css";
import {
    Counter,
    CurrencyIcon,
    Tab,
    ListIcon,
  } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = () => {
    return (
        <section className="burger-ingridients ">
            
            <Counter count={1} size="default" extraClass="m-1" />
            <Counter count={233} size="small" />
            <CurrencyIcon type="primary" />
        </section>
    );
}

export default BurgerIngredients;