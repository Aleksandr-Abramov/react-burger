import React from "react";
import styles from "./profile.module.css";
import {
  EmailInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlerChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <main className={styles.profileContainer}>
      <div className={styles.leftContentContainer}>
        <nav className={styles.linkContainer}>
          <Link
            className={`text text_type_main-medium text_color_inactive ${styles.link} `}
          >
            Профиль
          </Link>
          <Link
            className={`text text_type_main-medium text_color_inactive ${styles.link} `}
          >
            История заказов
          </Link>
          <Link
            className={`text text_type_main-medium text_color_inactive ${styles.link}`}
          >
            Выход
          </Link>
        </nav>
        <p className={`text text_type_main-default ${styles.text}`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>

      <form
        action="/"
        method="post"
        className={styles.form}
        onSubmit={handlerSubmit}
      >
        <Input
          placeholder="Имя"
          icon={"EditIcon"}
          extraClass="mb-6"
          value={value.name}
          type="text"
          name="name"
          onChange={handlerChange}
        />

        <EmailInput
          placeholder="Логон"
          icon={"EditIcon"}
          extraClass="mb-6"
          name="email"
          value={value.email}
          onChange={handlerChange}
        />

        <Input
          placeholder="Пароль"
          icon={"EditIcon"}
          extraClass="mb-6"
          value={value.password}
          type="password"
          name="password"
          onChange={handlerChange}
        />
        <div className={styles.linkFormContainer}>
          <Button
            htmlType="button"
            className={`text text_type_main-default text_color_inactive ${styles.button2} mr-5`}
          >
            Отмена
          </Button>
          <Button htmlType="submit" extraClass={styles.button}>
            Сохранить
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
