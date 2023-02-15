import React from "react";
import styles from "./burger-ingredients.module.css";
import TabContainer from "../tab-container/TabContainer";
import BurgerIngredient from "../burger-ingredient/BurgerIngredient";
import { data } from "../../utils/data";

import {
  Counter,
  CurrencyIcon,
  Tab,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = () => {
  const bun = data.filter((item) => item.type === "bun").map((item) => item);
  const main = data.filter((item) => item.type === "main").map((item) => item);
  const sauce = data
    .filter((item) => item.type === "sauce")
    .map((item) => item);

  return (
    <section className={styles.section}>
      <h1 className={`mt-10 mb-10 text text_type_main-large`}>
        Соберите бургер
      </h1>
      <TabContainer />
      <div className={`${styles.container}`}>
        <BurgerIngredient ingredients={bun} title="Булки" />
        <BurgerIngredient ingredients={sauce} title="Соусы" />
        <BurgerIngredient ingredients={main} title="Ингридиенты" />
      </div>
    </section>
  );
};

export default BurgerIngredients;
