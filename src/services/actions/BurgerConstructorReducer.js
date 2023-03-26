import { ADD_INGREDIENT, ADD_BUN_INGREDIENT_BUN, DRAG_ON, DRAG_OFF, CHANGE_INGEDIENT, DELETE_INGREDIENT } from "../reducers/BurgerConstructorReducer";

export const addIngredientConstuctor = (peyload) => ({type:ADD_INGREDIENT, peyload});
export const addBunIngredientConstuctor = (peyload) => ({type:ADD_BUN_INGREDIENT_BUN, peyload})
export const draggingOn = () => ({type: DRAG_ON})
export const draggingOff = () => ({type: DRAG_OFF})
export const changeIngredient = (peyload) => ({type:CHANGE_INGEDIENT, peyload})
export const deleteIngredient = (peyload) => ({type:DELETE_INGREDIENT, peyload})