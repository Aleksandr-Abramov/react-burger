import React from "react";
import styles from "./burger-ingredient.module.css";
import PropTypes from "prop-types";
import { ingridientPropType } from "../../utils/propType";


import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { setIngredient } from "../../services/actions/BurgerIngredientReducer";

const BurgerIngredient = ({
  ingredients,
  title,
  titleId,
  refs,
  handlerModelOpen,
}) => {
  const dispatch = useDispatch();

  // const handlerModelOpen = ({item}) => {
  //   console.log(item);
  //   dispatch(setIngredient(item))
  // }
  return (
    <>
      <h2
        className={`${styles.title} text text_type_main-medium`}
        id={titleId}
        ref={refs}
      >
        {title}
      </h2>
      {ingredients.map((item) => {
        
        return (
          <div
            className={styles.container}
            key={item._id}
            onClick={() => handlerModelOpen("ingridients", item)}
          >
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
  ingredients: PropTypes.arrayOf(ingridientPropType).isRequired,
  title: PropTypes.string.isRequired,
  titleId: PropTypes.string.isRequired,
  handlerModelOpen: PropTypes.func.isRequired,
};

export default BurgerIngredient;
