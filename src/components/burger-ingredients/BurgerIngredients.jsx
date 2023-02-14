import React from "react";
import styles from "./burger-ingredients.module.css";
import TabContainer from "../tab-container/TabContainer";
import { data } from '../../utils/data';

import {
    Counter,
    CurrencyIcon,
    Tab,
    ListIcon,
  } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = () => {

    return (
        <section className={styles.section}>
            <h1 className={`mt-10 mb-5 text text_type_main-large`}>Соберите бургер</h1>
            <TabContainer/>
            <div className={styles.scroll}>
            <div className={styles.container}>
            <h2 className={`mb-6 text text_type_main-medium ${styles.title2}`}>Булки</h2>
                {data.filter((item) => item.type === "bun").map((item) => (
                    <div className={styles.containerIngridients} key={item._id}>
                        <img src={item.image} alt={item.name} />
                        <div className={styles.price}><span className={`text text_type_digits-default ${styles.priceSpan}`}>{item.price}</span><CurrencyIcon/></div>
                        <h3 className="text text_type_main-default">{item.name}</h3>
                        <Counter count={1} size="small"/>
                </div>
                ))}
            </div> 

            <div className={styles.container}>
            <h2 className={`mb-6 text text_type_main-medium ${styles.title2}`}>Соусы</h2>
                {data.filter((item) => item.type === "sauce").map((item) => (
                    <div className={styles.containerIngridients} key={item._id}>
                        <img src={item.image} alt={item.name} />
                        <div className={styles.price}><span className={`text text_type_digits-default ${styles.priceSpan}`}>{item.price}</span><CurrencyIcon/></div>
                        <h3 className={`text text_type_main-default`}>{item.name}</h3>
                        <Counter count={1} size="small"/>
                </div>
                ))}
            </div> 


            <div className={styles.container}>
            <h2 className={`mb-6 text text_type_main-medium ${styles.title2}`}>Соусы</h2>
                {data.filter((item) => item.type === "main").map((item) => (
                    <div className={styles.containerIngridients} key={item._id}>
                        <img src={item.image} alt={item.name} />
                        <div className={styles.price}><span className={`text text_type_digits-default ${styles.priceSpan}`}>{item.price}</span><CurrencyIcon/></div>
                        <h3 className="text text_type_main-default">{item.name}</h3>
                        <Counter count={1} size="small"/>
                </div>
                ))}
            </div> 
            </div>
            
        </section>
    );
}

export default BurgerIngredients;