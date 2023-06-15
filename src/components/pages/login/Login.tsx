import React from "react";
import styles from "./login.module.css";
import {
  EmailInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  authorizationUser,
} from "../../../services/store/asyncActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(authorizationUser(value) as unknown as any);
  };
  return (
    <>
      <form
        action="/"
        method="post"
        className={styles.form}
        onSubmit={handlerSubmit}
      >
        <h1 className="text text_type_main-medium mb-6">Вход</h1>
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
          name="password"
          type="password"
          onChange={handlerChange}
        />
        <Button htmlType="submit" extraClass={styles.button}>
          Войти
        </Button>
        <span className="text text_type_main-default text_color_inactive mb-4">
          Вы — новый пользователь?{" "}
          <Link to="/register" className={styles.link}>
            Зарегистрироваться
          </Link>
        </span>
        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <Link to="/forgot-password" className={styles.link}>
            Восстановить пароль
          </Link>
        </span>
      </form>
    </>
  );
};

export default Login;
