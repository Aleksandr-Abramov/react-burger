import { combineReducers } from "redux";
import { popupIngredientsReducer } from "./popupIngredientsReducer";
import { popupOrderReducer } from "./popupOrderReducer";
import { BurgerIngredientsReducer } from "./BurgerIngredientsReducer";
import { IngredientDetails } from "./IngredientDetails";
import { BurgerConstructorReducer } from "./BurgerConstructorReducer";
import { OrderDetails } from "./OrderDetailsReducer";

export const rootReducer = combineReducers({
    popupIngredientsReducer,
    popupOrderReducer,
    BurgerIngredientsReducer,
    IngredientDetails,
    BurgerConstructorReducer,
    OrderDetails
})