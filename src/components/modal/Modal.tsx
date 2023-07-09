import React, { ReactNode } from "react";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/ModalOverlay";
import { THandlerModelClose } from "../../utils/typeScript";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeOrderPopup } from "../../services/store/popupOrderRecucer/actions";

type TModalProps = {
  children: ReactNode;
  handlerModelClose: (e: THandlerModelClose) => void;
};

const Modal: React.FC<TModalProps> = ({ children, handlerModelClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    const closePopup = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate("/");
        dispatch(closeOrderPopup());
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
