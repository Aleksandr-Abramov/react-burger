import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/BurgerIngredient";
import PropTypes from "prop-types";

const BurgerIngredients = ({ ingredients }) => {
  const [current, setCurrent] = React.useState("bun");

  const onTabClick = (tab) => {
    const element = document.getElementById(tab);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
    setCurrent(tab);
  };

  const bun = ingredients
    .filter((item) => item.type === "bun")
    .map((item) => item);
  const main = ingredients
    .filter((item) => item.type === "main")
    .map((item) => item);
  const sauce = ingredients
    .filter((item) => item.type === "sauce")
    .map((item) => item);

  return (
    <section className={styles.section}>
      <h1 className={`mt-10 mb-10 text text_type_main-large`}>
        Соберите бургер
      </h1>
      <div style={{ display: "flex" }} className="mb-10">
        <Tab value="bun" active={current === "one"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "two"} onClick={onTabClick}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "three"} onClick={onTabClick}>
          Начинка
        </Tab>
      </div>
      <div className={`${styles.container} custom-scroll`}>
        <BurgerIngredient ingredients={bun} title="Булки" titleId="bun" />
        <BurgerIngredient ingredients={sauce} title="Соусы" titleId="sauce" />
        <BurgerIngredient ingredients={main} title="Начинка" titleId="main" />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.array,
}

export default BurgerIngredients;
