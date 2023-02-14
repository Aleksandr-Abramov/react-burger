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
    <div className="wrapper">
      <nav className="nav">
        <ul className={ styles.menu }>
          <li className={`${styles.menuItem}`}><a href="/" className={ styles.menuLink }><BurgerIcon/><span className={`text text_type_main-default text_color_inactive pl-2`}>Конструктор</span></a></li>
          <li className={`${styles.menuItem}`}><a href="/" className={ styles.menuLink }><ListIcon/><span className={`text text_type_main-default text_color_inactive pl-2`}>Лента заказов</span></a></li>
          <li className={`${styles.menuItem}`}><a href="/" className={ styles.menuLink }><Logo/></a></li>
          <li className={`${styles.menuItem}`}><a href="/" className={ styles.menuLink }><ProfileIcon/><span className={`text text_type_main-default text_color_inactive pl-2`}>Личный кабинет</span></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default AppHeader;
