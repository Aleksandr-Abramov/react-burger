import React from "react";
import styles from "./burgerIngredientTitle.module.css";

const BurgerIngredientTitle = ({ name, id, refs }) => {
  return (
    <h2
      className={`${styles.title} text text_type_main-medium`}
      id={id}
      ref={refs}
    >
      {name}
    </h2>
  );
};
export default BurgerIngredientTitle;
