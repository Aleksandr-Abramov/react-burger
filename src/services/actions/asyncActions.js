import { checkResponse } from "../../utils/api";
import { BASE_URL } from "../../utils/api";
import {
  GET_INGRIDIENTS_SUCCESS,
  GET_INGRIDIENTS_ERRORE,
} from "../reducers/BurgerIngredientsReducer";
import { setOrderData } from "./OrderDetails.Reducer";
import { getIngredients } from "./BurgerIngredients";

export const fetchOrderPost = (ingredientsList) => {
  return function (dispatch) {
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
