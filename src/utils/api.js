import { setOrderData } from "../services/actions/OrderDetails.Reducer";
import {
  GET_INGRIDIENTS_ERRORE,
  GET_INGRIDIENTS_SUCCESS,
} from "../services/reducers/BurgerIngredientsReducer";
import { getIngredients } from "../services/actions/BurgerIngredients";
export const BASE_URL = "https://norma.nomoreparties.space/api";

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const fetchOrderPost = (ingredientsList) => {
  return function (dispatch) {
    fetch("https://norma.nomoreparties.space/api/orders/", {
      method: "POST",
      body: JSON.stringify({ ingredients: ingredientsList }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(checkResponse)
      .then((res) => {
        dispatch(setOrderData(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGRIDIENTS_SUCCESS,
      payload: true,
    });
    fetch(`${BASE_URL}/ingredients`)
      .then(checkResponse)
      .then((json) => {
        dispatch(getIngredients(json.data));
        dispatch({
          type: GET_INGRIDIENTS_SUCCESS,
          payload: false,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_INGRIDIENTS_ERRORE,
          payload: `ошибка на сервере ${err}`,
        });
      });
  };
};
