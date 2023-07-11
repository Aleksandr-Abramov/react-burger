import React from "react";
import { Order } from "../../order/Order";
import styles from "./orders.module.css";

const Orders = () => {
    return (
        <section className={`custom-scroll ${styles.rightContainer}`}>
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </section>
        // <div className={styles.rightContainer}>
        //     <Order></Order>
        //     <Order></Order>
        //     <Order></Order>
        //     <Order></Order>
        // </div>
    )
}

export default Orders;