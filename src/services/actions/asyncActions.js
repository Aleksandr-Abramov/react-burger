import { getIngredients } from "./BurgerIngredients";
import {
  GET_INGRIDIENTS_ERRORE,
  GET_INGRIDIENTS_SUCCESS,
} from "../reducers/BurgerIngredientsReducer";
import { BASE_URL } from "../../utils/api";

export const fetchIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: GET_INGRIDIENTS_SUCCESS,
      payload: true,
    });
    fetch(`${BASE_URL}/ingredients`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
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
