import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal-overlay.module.css";

const modalRoot = document.getElementById("modal-portal");

type TModalOverlay = {
  children: React.ReactNode;
  handlerModelClose: (e: any) => void;
};

const ModalOverlay: React.FC<TModalOverlay> = ({
  children,
  handlerModelClose,
}) => {
  return createPortal(
    <div
      data-overlay="overlay"
      className={`${styles.overlay}`}
      onClick={(e) => handlerModelClose(e)}
    >
      {children}
    </div>,
    modalRoot!
  );
};

export default ModalOverlay;
