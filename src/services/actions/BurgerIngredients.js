import { GET_INGRIDIENTS, COUNTER_PLAS } from "../reducers/BurgerIngredientsReducer"

export const getIngredients = (payload) => ({ type: GET_INGRIDIENTS, payload }) 
export const counterPlas = (payload) => ({ type: COUNTER_PLAS, payload})