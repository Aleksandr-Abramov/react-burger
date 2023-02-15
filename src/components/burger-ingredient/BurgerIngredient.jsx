import React from "react";
import styles from "./burger-ingredient.module.css";
import PropTypes from 'prop-types';

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredient = ({
  ingredients,
  title = `Булки`,
  titleId,
}) => {
  return (
    <>
      <h2 className={`${styles.title} text text_type_main-medium`} id={titleId}>
        {title}
      </h2>
      {ingredients.map((item) => {
        return (
          <div className={styles.container} key={item._id}>
            <img src={item.image} alt={item.name} className={styles.img} />
            <div className={styles.priceContainer}>
              <span className={`${styles.span} text text_type_digits-default`}>
                {item.price}
              </span>
              <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.text} text text_type_main-default`}>
              {item.name}
            </p>
            <Counter />
          </div>
        );
      })}
    </>
  );
};

BurgerIngredient.propTypes = {
  ingredients: PropTypes.array,
  title: PropTypes.string,
  titleId: PropTypes.string,
}

export default BurgerIngredient;
