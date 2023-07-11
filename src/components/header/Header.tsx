import React from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import {
  Logo,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { userData } from "../../services/store/authReducer/selectors";
import { useSelector } from "react-redux";

const activeClass = `${styles.menuLink} ${styles.menuLinkActive} text text_type_main-default`;
const unActiveClass = `${styles.menuLink} text text_type_main-default text_color_inactive`;

const Header = () => {
  const isUserAuth = useSelector(userData);
 
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav>
          <ul className={styles.menu}>
            <li className={`${styles.menuItem}`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : unActiveClass
                }
              >
                {({ isActive }) => {
                  return (
                    <>
                      <BurgerIcon type={isActive ? "primary" : "secondary"} />
                      <span className={`pl-2`}>Конструктор</span>
                    </>
                  );
                }}
              </NavLink>
            </li>
            <li className={`${styles.menuItem}`}>
              <NavLink
                to="/feed"
                className={({ isActive }) =>
                  isActive ? activeClass : unActiveClass
                }
              >
                {({ isActive }) => {
                  return (
                    <>
                      <BurgerIcon type={isActive ? "primary" : "secondary"} />
                      <span className={`pl-2`}>Лента заказов</span>
                    </>
                  );
                }}
              </NavLink>
            </li>
            <li className={`${styles.menuItem} ${styles.Logo}`}>
              <NavLink to="/" className={styles.menuLink}>
                <Logo />
              </NavLink>
            </li>
            <li className={`${styles.menuItem}`}>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? activeClass : unActiveClass
                }
              >
                {({ isActive }) => {
                  return (
                    <>
                      <ProfileIcon type={isActive ? "primary" : "secondary"} />
                      <span className={`pl-2`}>{isUserAuth ? isUserAuth.name : "Личный кабинет"}</span>
                    </>
                  );
                }}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
