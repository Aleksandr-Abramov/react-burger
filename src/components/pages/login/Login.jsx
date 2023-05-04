import React from "react";
import styles from "./login.module.css";
import {
  EmailInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { authorizationUser, getUserData } from "../../../services/store/asyncActions";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { refreshToken } from "../../../utils/api";
const Login = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handlerChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(authorizationUser(value));
    navigate(location.state.from.pathname)
    console.log(location.state.from.pathname);
  };
  return (
    <>
    <button onClick={() => refreshToken()}>refreshToken</button>
    <button onClick={() => getUserData()}>fetchWithRefresh</button>
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
