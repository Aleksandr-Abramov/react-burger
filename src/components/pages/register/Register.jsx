import React from "react";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
import {
  EmailInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

const Register = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    name: "",
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
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <Input
        placeholder="Пароль"
        extraClass="mb-6"
        value={value.name}
        type="text"
        name="name"
        onChange={handlerChange}
      />
      <EmailInput
        placeholder="E-mail"
        extraClass="mb-6"
        name="email"
        value={value.email}
        onChange={handlerChange}
      />
      <Input
        placeholder="Пароль"
        icon={"ShowIcon"}
        extraClass="mb-6"
        value={value.password}
        type="password"
        name="password"
        onChange={handlerChange}
      />
      <Button htmlType="submit" extraClass={styles.button}>
        Зарегистрироваться
      </Button>

      <span className="text text_type_main-default text_color_inactive">
        Уже зарегистрированы?{" "}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </span>
    </form>
  );
};

export default Register;
