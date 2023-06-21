import React, { ReactNode } from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/ModalOverlay";

type TModalProps = {
  children: ReactNode;
  handlerModelClose: (e: any) => void;
};

const Modal: React.FC<TModalProps> = ({ children, handlerModelClose }) => {
  React.useEffect(() => {
    const closePopup = (e:KeyboardEvent) => {
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

export default Modal;
