import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import BurgerIngredients from "./components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burger-constructor/BurgerConstructor";
import Modal from "./components/modal/Modal";
// import { data } from "./utils/data";
import api from "./utils/api";

function App() {
  const [isOpenPopupIngredients, setIsOpenPopupIngredients] =
    React.useState(false);
  const [isOpenPopupOrder, setisOpenPopupOrder] = React.useState(false);
  const [isOpenPopupError, setIsOpenPopupError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("Во время получения ингридиентов. На сервере произошла ошибка.");
  const [ingredientData, setIngredientData] = React.useState({});
  const [apiData, setApiData] = React.useState([]);

  React.useEffect(() => {
    api
      .getData()
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) => {
        setErrorMessage("Во время получения ингридиентов. На сервере произошла ошибка.")
        setIsOpenPopupError(true)
      }
      );
  }, []);

  function handlerModelClose(e) {
    e.stopPropagation();
    if (
      e.target.dataset.overlay === "overlay" ||
      e.currentTarget.type === "button" ||
      e.key === "Escape"
    ) {
      setIsOpenPopupIngredients(false);
      setisOpenPopupOrder(false);
      setIsOpenPopupError(false);
    }
  }

  const handlerModelOpen = (model, data) => {
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
            ingredients={apiData}
            handlerModelOpen={handlerModelOpen}
            isOpenPopupIngredients={isOpenPopupIngredients}
            handlerModelClose={handlerModelClose}
            ingredientData={ingredientData}
          />
          <BurgerConstructor
            ingredients={apiData}
            handlerModelOpen={handlerModelOpen}
            isOpenPopupOrder={isOpenPopupOrder}
            handlerModelClose={handlerModelClose}
          />
        </main>
      </div>
      {isOpenPopupError && (
        <Modal handlerModelClose={handlerModelClose}>
          <p className="messageErrorText text_type_main-large">{errorMessage}</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
