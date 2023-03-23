import { ADD_INGREDIENT, ADD_BUN_INGREDIENT_BUN, DRAG_ON, DRAG_OFF } from "../reducers/BurgerConstructorReducer";

export const addIngredientConstuctor = (peyload) => ({type:ADD_INGREDIENT, peyload});
export const addBunIngredientConstuctor = (peyload) => ({type:ADD_BUN_INGREDIENT_BUN, peyload})
export const draggingOn = () => ({type: DRAG_ON})
export const draggingOff = () => ({type: DRAG_OFF})