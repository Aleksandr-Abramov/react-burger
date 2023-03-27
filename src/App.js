import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import BurgerIngredients from "./components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burger-constructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
//import Modal from "./components/modal/Modal";
import { useDispatch } from "react-redux";

import { fetchIngredients } from "./services/actions/asyncActions";
function App() {
  //const [isOpenPopupError, setIsOpenPopupError] = React.useState(false);
  // const [errorMessage, setErrorMessage] = React.useState("Во время получения ингридиентов. На сервере произошла ошибка.");

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const re = (re) => {
    console.log(re);
  }

  return (
    <div className="App">
      <header className="header">
        <AppHeader />
      </header>
      <div className="wrapper">
        <main className="main">
          <DndProvider backend={HTML5Backend}>

              <BurgerIngredients />
              <BurgerConstructor />

            
          </DndProvider>
        </main>
      </div>
      {/* {isOpenPopupError && (
        <Modal handlerModelClose={handlerModelClose}>
          <p className="messageErrorText text_type_main-large">{errorMessage}</p>
        </Modal>
      )} */}
    </div>
  );
}

export default App;
