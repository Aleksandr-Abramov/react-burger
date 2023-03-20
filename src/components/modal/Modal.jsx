import React from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/ModalOverlay";
import { useDispatch } from "react-redux";
import { closeIngredientPopup } from "../../services/actions/popupIngredientsReducer";
import { closeOrderPopup } from "../../services/actions/popupOrderRecucer";


const Modal = ({ children }) => {
  const dispatch = useDispatch();

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

  function handlerModelClose(e) {
    e.stopPropagation();
    if (
      e.target.dataset.overlay === "overlay" ||
      e.currentTarget.type === "button" ||
      e.key === "Escape"
    ) {
      dispatch(closeIngredientPopup())
      dispatch(closeOrderPopup())
      //setIsOpenPopupError(false);
    }
  }

  return (
    <ModalOverlay handlerModelClose={handlerModelClose}>
    <div className={styles.modal}>
      <button data-close="close" type="button" className={styles.icon} onClick={handlerModelClose}>
        <CloseIcon type="primary" />
      </button>
      {children}
    </div>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  handlerModelClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
