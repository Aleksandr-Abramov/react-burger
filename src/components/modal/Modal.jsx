import React from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/ModalOverlay";

const Modal = ({ children, handlerModelClose }) => {
  React.useEffect(() => {
    const closePopup = (e) => {
      if (e.key === "Escape") {
        handlerModelClose(e);
      }
    };
    document.addEventListener("keydown", closePopup);
    return () => {
      document.removeEventListener("keydown", closePopup);
    };
  });

  return (
    <ModalOverlay handlerModelClose={handlerModelClose}>
      <div className={styles.modal}>
        <button
          data-close="close"
          type="button"
          className={styles.icon}
          onClick={handlerModelClose}
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
