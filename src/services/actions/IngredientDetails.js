import { GET_INGREDIENT, SET_INGREDIENT, CLEAR_INGREDIENT } from "../reducers/IngredientDetails";

export const getIngredient = () => ({ type: GET_INGREDIENT });
export const setIngredient = (peyload) => ({ type: SET_INGREDIENT, peyload }); 
export const clearIngredient = () => ({ type: CLEAR_INGREDIENT}); 