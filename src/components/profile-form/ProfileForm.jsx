import React from "react";
import styles from "./profile-form.module.css";
import {
  EmailInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../services/store/authReducer/selectors";
import { BASE_URL, fetchWithRefresh, PATCH_HEADERS } from "../../utils/api";
import { CHANGE_USER_DATA } from "../../services/store/authReducer/reducer";

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const userDataAuth = useSelector(userData);
  const [value, setValue] = useState({
    name: userDataAuth.name,
    email: userDataAuth.email,
    password: "",
  });
  const handlerChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  /**
   * Изменяет данные пользователя.
   */
  const handlerSubmit = (e) => {
    e.preventDefault();
    fetchWithRefresh(`${BASE_URL}/auth/user`, {
      ...PATCH_HEADERS,
      body: JSON.stringify(value),
    })
      .then((res) => {
        dispatch({
          type: CHANGE_USER_DATA,
          payload: res.user,
        });
      })
      .catch((res) => console.log(res));
  };
  /**
   * Изменяет данные пользователя, в полях ввода.
   */
  const handlerOldData = () => {
    setValue({
      name: userDataAuth.name,
      email: userDataAuth.email,
      password: "",
    });
  };
  return (
    <form
      action="/"
      method="post"
      className={styles.form}
      onSubmit={handlerSubmit}
    >
      <Input
        placeholder={"Имя"}
        icon={"EditIcon"}
        extraClass="mb-6"
        value={value.name}
        type="text"
        name="name"
        onChange={handlerChange}
      />

      <EmailInput
        placeholder={"Логон"}
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
          onClick={handlerOldData}
        >
          Отмена
        </Button>
        <Button htmlType="submit" extraClass={styles.button}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};
