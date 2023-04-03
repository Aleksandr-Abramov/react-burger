import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav>
          <ul className={ styles.menu }>
            <li className={`${styles.menuItem}`}><a href="/" className={ styles.menuLink }><BurgerIcon type="primery"/><span style={{ color: "white" }} className={`text text_type_main-default pl-2`}>Конструктор</span></a></li>
            <li className={`${styles.menuItem}`}><a href="/" className={ styles.menuLink }><ListIcon type="secondary"/><span className={`text text_type_main-default text_color_inactive pl-2`}>Лента заказов</span></a></li>
            <li className={`${styles.menuItem}`}><a href="/" className={ styles.menuLink }><Logo/></a></li>
            <li className={`${styles.menuItem}`}><a href="/" className={ styles.menuLink }><ProfileIcon type="secondary"/><span className={`text text_type_main-default text_color_inactive pl-2`}>Личный кабинет</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
    
  );
};

export default AppHeader;
