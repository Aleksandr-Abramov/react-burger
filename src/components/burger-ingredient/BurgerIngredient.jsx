import React from "react";
import styles from "./burger-ingredient.module.css";
import PropTypes from "prop-types";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { setIngredient } from "../../services/actions/IngredientDetails";
import {
  draggingOff,
  draggingOn,
} from "../../services/actions/BurgerConstructorReducer";

const BurgerIngredient = ({ item, count }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const ingredientId = item["_id"];

  const handlerModelOpen = (item) => {
    dispatch(setIngredient(item));
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingridient",
    item: item,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  React.useEffect(() => {
    if (isDrag === true) {
      dispatch(draggingOn());
    } else {
      dispatch(draggingOff());
    }
  }, [isDrag, dispatch]);

  return (
    <Link to={`/ingredients/${ingredientId}`} state={{ background: location }} className={styles.link}>
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
        <Counter count={count} />
      </div>
    </Link> 
  );
};

BurgerIngredient.propTypes = {
  item: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default BurgerIngredient;
