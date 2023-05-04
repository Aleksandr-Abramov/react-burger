import React from "react";
import styles from "./profile-form.module.css";
import {
    EmailInput,
    Input,
    Button,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { useState } from "react";
import { changeUserData } from "../../services/store/asyncActions";
import { useDispatch, useSelector } from "react-redux";
import { oldUserData } from "../../services/store/authReducer/selectors";

export const ProfileForm = () => {
    const dispatch = useDispatch()
    const returnOldUserData = useSelector(oldUserData);
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
        dispatch(changeUserData(value))
      };

      const handlerOldData = () => {
        dispatch(changeUserData(returnOldUserData))
      }
  return (
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
