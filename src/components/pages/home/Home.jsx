import React from "react";
import styles from "./home.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../../burger-constructor/BurgerConstructor";
import BurgerIngredients from "../../burger-ingredients/BurgerIngredients";

const Home = () => {

  
  return (
    <>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      </div>
    </>
  );
};

export default Home;
