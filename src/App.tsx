import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import BurgerIngredients from "./components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burger-constructor/BurgerConstructor";
import ModalOverlay from "./components/modal-overlay/ModalOverlay";
import Modal from "./components/modal/Modal";
import OrderDetails from "./components/order-details/OrderDetails";
import IngredientDetails from "./components/ingredient-details/IngredientDetails";
import { data } from "./utils/data";

function App() {
  const [isOpenPopupIngredients, setIsOpenPopupIngredients] =
    React.useState(false);
  const [isOpenPopupOrder, setisOpenPopupOrder] = React.useState(false);
  const [ingredientData, setIngredientData] = React.useState({});

  function handlerModelClose() {
    setIsOpenPopupIngredients(false);
    setisOpenPopupOrder(false);
  }

  const handlerModelOpen = (model: string, data: object) => {
    if (model === "ingridients") {
      setIngredientData(data);
      setIsOpenPopupIngredients(true);
    } else {
      setisOpenPopupOrder(true);
    }
  };
  return (
    <div className="App">
      <header className="header">
        <AppHeader />
      </header>
      <div className="wrapper">
        <main className="main">
          <BurgerIngredients
            ingredients={data}
            handlerModelOpen={handlerModelOpen}
          />
          <BurgerConstructor
            ingredients={data}
            handlerModelOpen={handlerModelOpen}
          />
        </main>
      </div>
      {isOpenPopupIngredients && (
        <ModalOverlay>
          <Modal handlerModelClose={handlerModelClose}>
            <IngredientDetails data={ingredientData} />
          </Modal>
        </ModalOverlay>
      )}
      {isOpenPopupOrder && (
        <ModalOverlay>
          <Modal handlerModelClose={handlerModelClose}>
            <OrderDetails />
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
}

export default App;
