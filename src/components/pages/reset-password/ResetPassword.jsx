import React from "react";
import styles from "./reset-password.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const ResetPassword = () => {
  const [value, setValue] = useState({
    newPassword: "",
    emailText: "",
  });
  const handlerChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <form
      action="/"
      method="post"
      className={styles.form}
      onSubmit={handlerSubmit}
    >
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <Input
        placeholder="Введите новый пароль"
        icon={"ShowIcon"}
        extraClass="mb-6"
        value={value.newPassword}
        type="text"
        name="newPassword"
        onChange={handlerChange}
      />

      <Input
        placeholder="Введите код из письма"
        extraClass="mb-6"
        value={value.emailText}
        type="text"
        name="emailText"
        onChange={handlerChange}
      />

      <Button htmlType="submit" extraClass={styles.button}>
        Сохранить
      </Button>
      <span className="text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </span>
    </form>
  );
};

export default ResetPassword;
