import React from "react";
import styles from "./burgerIngredientTitle.module.css";
import PropTypes from 'prop-types';

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

BurgerIngredientTitle.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  refs: PropTypes.func.isRequired,
}
export default BurgerIngredientTitle;
