import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal-overlay.module.css";
const modalRoot = document.getElementById("modal-portal");

const ModalOverlay = ({ children }) => {
  return createPortal(<div className={styles.overlay}>{children}</div>, modalRoot)
};

export default ModalOverlay;
