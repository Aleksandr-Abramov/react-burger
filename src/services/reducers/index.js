import { popupIngredientsReducer } from "./popupIngredientsReducer";
import { popupOrderReducer } from "./popupOrderReducer";
import { BurgerIngredientsReducer } from "./BurgerIngredients";
import { combineReducers } from "redux";
import { BurgerIngredientReducer } from "./BurgerIngredientReducer";

export const rootReducer = combineReducers({
    popupIngredientsReducer,
    popupOrderReducer,
    BurgerIngredientsReducer,
    // BurgerIngredientReducer
})