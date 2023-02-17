import React from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

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
      <button data-close="close" type="button" className={styles.icon} onClick={handlerModelClose}>
        <CloseIcon type="primary" />
      </button>
      {children}
    </div>
  );
};

Modal.propTypes = {
  handlerModelClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;