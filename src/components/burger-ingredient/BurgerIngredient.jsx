import React, { useState } from "react";
import styles from "./burger-ingredient.module.css";
import PropTypes from "prop-types";
import { ingridientPropType } from "../../utils/propType";
import { useDrag } from "react-dnd";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { setIngredient } from "../../services/actions/BurgerIngredientReducer";
import { openIngredientPopup } from "../../services/actions/popupIngredientsReducer";

const BurgerIngredient = ({ item }) => {
  const dispatch = useDispatch();
  // const [a, aS] = useState({})
  const handlerModelOpen = (item) => {
    dispatch(setIngredient(item));
    dispatch(openIngredientPopup());
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingridient",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={styles.container}
      ref={dragRef}
      onClick={() => handlerModelOpen(item)}
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

  // return (
  //   <>
  //     {ingredients.map((item) => {
  //       return (
  //         <div
  //           className={styles.container}
  //           key={item._id}
  //           onClick={() => handlerModelOpen(item)}
  //         >
  //           <img src={item.image} alt={item.name} className={styles.img} />
  //           <div className={styles.priceContainer}>
  //             <span className={`${styles.span} text text_type_digits-default`}>
  //               {item.price}
  //             </span>
  //             <CurrencyIcon type="primary" />
  //           </div>
  //           <p className={`${styles.text} text text_type_main-default`}>
  //             {item.name}
  //           </p>
  //           <Counter />
  //         </div>
  //       );
  //     })}
  //   </>
  // );
};

// BurgerIngredient.propTypes = {
//   ingredients: PropTypes.arrayOf(ingridientPropType).isRequired,
//   title: PropTypes.string.isRequired,
//   titleId: PropTypes.string.isRequired,
//   handlerModelOpen: PropTypes.func.isRequired,
// };

export default BurgerIngredient;
