import React from "react";
import styles from "./profile.module.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const activeClass = `text text_type_main-medium text_color_inactive ${styles.link} ${styles.activeLink}`;
  const unActiveClass = `text text_type_main-medium text_color_inactive ${styles.link}`;

  return (
    <main className={styles.profileContainer}>
      <div className={styles.leftContentContainer}>
        <nav className={styles.linkContainer}>
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
          >
            Профиль
          </NavLink>
          <NavLink
            to="/profile/orders"
            end
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
          >
            История заказов
          </NavLink>
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              isActive ? activeClass : unActiveClass
            }
          >
            Выход
          </NavLink>
        </nav>
        <p className={`text text_type_main-default ${styles.text}`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Outlet />
    </main>
  );
};

export default Profile;
