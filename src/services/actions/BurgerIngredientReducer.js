import { GET_INGREDIENT, SET_INGREDIENT } from "../reducers/BurgerIngredientReducer";

export const getIngredient = () => ({ type: GET_INGREDIENT });
export const setIngredient = (peyload) => ({ type: SET_INGREDIENT, peyload }); 