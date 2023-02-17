import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import BurgerIngredients from "./components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burger-constructor/BurgerConstructor";
import ModalOverlay from "./components/modal-overlay/ModalOverlay";
import Modal from "./components/modal/Modal";
import OrderDetails from "./components/order-details/OrderDetails";
import IngredientDetails from "./components/ingredient-details/IngredientDetails";
// import { data } from "./utils/data";
import api from "./utils/api";

function App() {
  const [isOpenPopupIngredients, setIsOpenPopupIngredients] =
    React.useState(false);
  const [isOpenPopupOrder, setisOpenPopupOrder] = React.useState(false);
  const [ingredientData, setIngredientData] = React.useState({});
  const [apiData, setApiData] = React.useState([]);

  React.useEffect(() => {
    api
      .getData()
      .then((res) => {
        setApiData(res.data);
      })
      .catch((err) =>
        console.log(`во время получения ингридиентов произошла ошибка ${err}`)
      );
  }, []);

  function handlerModelClose(e) {
    e.stopPropagation();
    if(e.target.dataset.overlay === "overlay"|| e.currentTarget.type === 'button') {
      setIsOpenPopupIngredients(false);
      setisOpenPopupOrder(false);
    }
    
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
            ingredients={apiData}
            handlerModelOpen={handlerModelOpen}
          />
          <BurgerConstructor
            ingredients={apiData}
            handlerModelOpen={handlerModelOpen}
          />
        </main>
      </div>
      {isOpenPopupIngredients && (
        <ModalOverlay handlerModelClose={handlerModelClose}>
          <Modal handlerModelClose={handlerModelClose}>
            <IngredientDetails data={ingredientData} />
          </Modal>
        </ModalOverlay>
      )}
      {isOpenPopupOrder && (
        <ModalOverlay handlerModelClose={handlerModelClose}>
          <Modal handlerModelClose={handlerModelClose}>
            <OrderDetails />
          </Modal>
        </ModalOverlay>
      )}
    </div>
  );
}

export default App;
