import { combineReducers } from "redux";
import { popupIngredientsReducer } from "../store/popupIngredientsReducer/reducer";
import { popupOrderReducer } from "../store/popupOrderRecucer/reducer";
import { BurgerIngredientsReducer } from "../store/BurgerIngredientsReducer/reducer";
import { BurgerConstructorReducer } from "../store/BurgerConstructorReducer/reducer";
import { IngredientDetailsReducer } from "../store/IngredientDetailsReducer/reducer";
import { OrderDetailsReducer } from "../store/OrderDetailsReducer/reducer";
import { AuthReducer } from "./authReducer/reducer";
import { wsOrdersAllReducer } from "./wsOrdersAll/reducer2";
import { popupFeedOrderReducer } from "./popupFeedOrderReducer/reducer";

export const rootReducer = combineReducers({
  popupIngredientsReducer,
  popupOrderReducer,
  BurgerIngredientsReducer,
  BurgerConstructorReducer,
  IngredientDetailsReducer,
  OrderDetailsReducer,
  AuthReducer, 
  wsOrdersAllReducer,
  popupFeedOrderReducer
});
