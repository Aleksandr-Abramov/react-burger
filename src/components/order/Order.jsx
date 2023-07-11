import React from "react";
import styles from "./order.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Order = () => {
    const location = useLocation();

  return (
    <Link to={`/feed/3`} state={{ background: location }} className={styles.orderContainer}>
    {/* <div className={styles.orderContainer}> */}
      <h3 className={`text text_type_digits-default mb-6 ${styles.dateH3}`}>#034535 <span className="text text_type_main-default text_color_inactive">Сегодня, 16:20</span></h3>
      <h2 className="text text_type_main-medium mb-6">Death Star Starship Main бургер</h2>
      <div className={styles.imageContainer}>
        <div>dsad</div>
        <span className={`text text_type_digits-default ${styles.digitsSpan}`}>480 <CurrencyIcon type="primary"/></span>
      </div>
    {/* </div> */}
    </Link>
  );
};
export { Order };
