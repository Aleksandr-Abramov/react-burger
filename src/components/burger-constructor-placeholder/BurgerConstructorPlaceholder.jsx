import React from "react";
import styles from "../burger-constructor-placeholder/BurgerConstructorPlaceholder.module.css";

const BurgerConstructorPlaceholder = ({ title, borderColor, type }) => {
  let styleType = undefined;
  if (type === "top") {
    styleType = styles.fakeConntainerTop;
  } else if (type === "bottom") {
    styleType = styles.fakeConntainerBottom;
  } else if (type === "middle") {
    styleType = styles.fakeConntainerMiddle;
  }
  return (
    <div
      className={`${styles.fakeConntainer} ${styleType}   text text_type_main-small`}
      style={{ border: `1px solid ${borderColor}` }}
    >
      {title}
    </div>
  );
};
export default BurgerConstructorPlaceholder;
