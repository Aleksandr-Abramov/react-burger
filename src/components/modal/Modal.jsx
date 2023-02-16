import React from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ children, handlerModelClose }) => {
  React.useEffect(() => {
    const closePopup = (e) => {
      if (e.key === "Escape") {
        handlerModelClose();
      }
    };
    document.addEventListener("keydown", closePopup);
    return () => {
      document.removeEventListener("keydown", closePopup);
    };
  });

  return (
    <div className={styles.modal}>
      <button type="button" className={styles.icon} onClick={handlerModelClose}>
        <CloseIcon type="primary" />
      </button>
      {children}
    </div>
  );
};

export default Modal;
