import { getIngredients } from "./BurgerIngredients";

export const fetchIngredients = () => {
  return function (dispatch) {
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((json) => dispatch(getIngredients(json.data)));
  };
};