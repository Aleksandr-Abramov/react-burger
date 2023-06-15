import React from "react";
import styles from "./reset-password.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "../../../utils/api";
import { useDispatch } from "react-redux";
import { changeResetPassword } from "../../../services/store/authReducer/actions";

const ResetPassword = () => {
  const [value, setValue] = useState({
    password: "",
    token: "",
  });
  const dispatch = useDispatch();
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetPassword(value)
      .then((result) => {
        console.log(result);
        dispatch(changeResetPassword(false));
      })
      .catch((err) => {
        console.log(err);
      });
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
        value={value.password}
        type="text"
        name="password"
        onChange={handlerChange}
      />

      <Input
        placeholder="Введите код из письма"
        extraClass="mb-6"
        value={value.token}
        type="text"
        name="token"
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
