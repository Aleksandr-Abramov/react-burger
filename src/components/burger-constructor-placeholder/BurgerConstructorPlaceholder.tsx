import React from "react";
import styles from "../burger-constructor-placeholder/BurgerConstructorPlaceholder.module.css";


type TBurgerConstructorPlaceholderProps = {
  title: string;
  borderColor: string;
  type: string; 
}

const BurgerConstructorPlaceholder: React.FC<TBurgerConstructorPlaceholderProps> = ({ title, borderColor, type }) => {
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
