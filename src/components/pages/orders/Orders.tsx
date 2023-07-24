import React from "react";
import { Order } from "../../order/Order";
import styles from "./orders.module.css";
import { useSelector } from "react-redux";
import { getWsAllIngridients } from "../../../services/store/wsOrdersAll/selectors";

const Orders = () => {
  const getIngredients = useSelector(getWsAllIngridients);


  return (
    <section className={`custom-scroll ${styles.rightContainer}`}>
      {/* {getIngredients.map(() => {
        return <Order />;
      })} */}
      
    </section>

  );
};

export default Orders;
