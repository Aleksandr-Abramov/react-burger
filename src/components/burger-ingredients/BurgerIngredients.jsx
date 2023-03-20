import React from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/BurgerIngredient";
//import PropTypes from "prop-types";
//import { ingridientPropType } from "../../utils/propType";
import Modal from "../modal/Modal";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import { useSelector } from "react-redux";

const BurgerIngredients = ({
  handlerModelClose,
}) => {
  const [current, setCurrent] = React.useState("bun");
  const isOpenClosePopupIngredients = useSelector((state) => state.popupIngredientsReducer.isOpenCloseIngredient)
  const ingredients = useSelector((state) => state.BurgerIngredientsReducer.ingredients)

  const refs = {
    bunRef: React.useRef(),
    mainRef: React.useRef(),
    sauceRef: React.useRef(),
  };

  const onTabClick = (tab) => {
    switch (tab) {
      case "sauce":
        refs.sauceRef.current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
        break;
      case "main":
        refs.mainRef.current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
        break;
      default:
        refs.bunRef.current.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
        break;
    }
    setCurrent(tab);
  };

  const bun = React.useMemo(
    () => ingredients.filter((item) => item.type === "bun").map((item) => item),
    [ingredients]
  );
  const main = React.useMemo(
    () =>
      ingredients.filter((item) => item.type === "main").map((item) => item),
    [ingredients]
  );
  const sauce = React.useMemo(
    () =>
      ingredients.filter((item) => item.type === "sauce").map((item) => item),
    [ingredients]
  );

  return (
    <section className={styles.section}>
      <h1 className={`mt-10 mb-10 text text_type_main-large`}>
        Соберите бургер
      </h1>
      <div style={{ display: "flex" }} className="mb-10">
        <Tab value="bun" active={current === "bun"} onClick={onTabClick}>
          Булки 
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={onTabClick}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={onTabClick}>
          Начинка
        </Tab>
      </div>
      <div className={`${styles.container} custom-scroll`}>
        <BurgerIngredient
          ingredients={bun}
          title="Булки"
          titleId="bun"
          refs={refs.bunRef}
        />
        <BurgerIngredient
          ingredients={sauce}
          title="Соусы"
          titleId="sauce"
          refs={refs.sauceRef}
        />
        <BurgerIngredient
          ingredients={main}
          title="Начинка"
          titleId="main"
          refs={refs.mainRef}
        />
      </div>
      {isOpenClosePopupIngredients && (
        <Modal>
          <IngredientDetails  />
        </Modal>
      )}
    </section>
  );
};

// BurgerIngredients.propTypes = {
//   ingredients: PropTypes.arrayOf(ingridientPropType).isRequired,
//   handlerModelOpen: PropTypes.func.isRequired,
// };

export default BurgerIngredients;
