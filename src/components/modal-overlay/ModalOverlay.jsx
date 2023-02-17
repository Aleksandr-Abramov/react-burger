import React from "react";
import { createPortal } from "react-dom";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";
const modalRoot = document.getElementById("modal-portal");

const ModalOverlay = ({ children, handlerModelClose }) => {
  return createPortal(
    <div data-overlay="overlay" className={`${styles.overlay}`} onClick={(e) => handlerModelClose(e)}>{children}</div>,
    modalRoot
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element,
};
export default ModalOverlay;
