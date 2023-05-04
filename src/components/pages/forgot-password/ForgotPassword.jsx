import React from "react";
import styles from "./forgot-password.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { forgotPassword } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate()

  const [value, setValue] = useState({
    email: "",
  });
  const handlerChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    forgotPassword(value)
    .then((result) => {
      console.log(result)
      navigate("/reset-password")
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
      <EmailInput
        placeholder="Укажите e-mail"
        extraClass="mb-6"
        name="email"
        value={value.email}
        onChange={handlerChange}
        required
      />

      <Button htmlType="submit" extraClass={styles.button}>
        Восстановить
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

export default ForgotPassword;
