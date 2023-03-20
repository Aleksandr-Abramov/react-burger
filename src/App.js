import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/AppHeader";
import BurgerIngredients from "./components/burger-ingredients/BurgerIngredients";
import BurgerConstructor from "./components/burger-constructor/BurgerConstructor";
import Modal from "./components/modal/Modal";
import api from "./utils/api";
import { useDispatch } from "react-redux";
import { openIngredientPopup, closeIngredientPopup } from "./services/actions/popupIngredientsReducer";
import { openOrderPopup, closeOrderPopup } from "./services/actions/popupOrderRecucer"
//import { getIngredients } from "./services/actions/BurgerIngredients";
import { fetchIngredients } from "./services/actions/asyncActions";
function App() {

  const [isOpenPopupError, setIsOpenPopupError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("Во время получения ингридиентов. На сервере произошла ошибка.");
  const [ingredientData, setIngredientData] = React.useState({});
  const [apiData, setApiData] = React.useState([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchIngredients())
    api
      .getData()
      .then((res) => {
        
        // dispatch(getIngridients(res.data))
        setApiData(res.data);
      })
      .catch((err) => {
        setErrorMessage("Во время получения ингридиентов. На сервере произошла ошибка.")
        setIsOpenPopupError(true)
      }
      );
  }, [dispatch]);

  function handlerModelClose(e) {
    e.stopPropagation();
    if (
      e.target.dataset.overlay === "overlay" ||
      e.currentTarget.type === "button" ||
      e.key === "Escape"
    ) {
      dispatch(closeIngredientPopup())
      dispatch(closeOrderPopup())
      setIsOpenPopupError(false);
    }
  }

  const handlerModelOpen = (model, data) => {
    if (model === "ingridients") {
      setIngredientData(data);
      dispatch(openIngredientPopup())
    } else {
      dispatch(openOrderPopup())
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
            // ingredients={apiData}
            handlerModelOpen={handlerModelOpen}
            handlerModelClose={handlerModelClose}
            ingredientData={ingredientData}
          />
          <BurgerConstructor
            // ingredients={apiData}
            handlerModelOpen={handlerModelOpen}
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
