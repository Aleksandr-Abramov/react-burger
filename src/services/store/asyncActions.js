import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import {
  GET_INGRIDIENTS_SUCCESS,
  GET_INGRIDIENTS_ERRORE,
  GET_INGRIDIENTS_REQUEST,
} from "./BurgerIngredientsReducer/reducer";
import { setOrderData } from "../store/OrderDetailsReducer/actions";

export const fetchOrderPost = (ingredientsList) => (dispatch) => {
  fetch(`${BASE_URL}/orders/`, {
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

export const fetchIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGRIDIENTS_REQUEST,
    payload: true,
  });
  fetch(`${BASE_URL}/ingredients`)
    .then(checkResponse)
    .then((json) => {
      dispatch({
        type: GET_INGRIDIENTS_SUCCESS,
        payload: json.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_INGRIDIENTS_ERRORE,
        payload: `Произошла ошибка при получении данных: ${err.status}`,
      });
    });
};
