import * as CONST from './reducer';

export const openIngredientPopup = () => ({ type: CONST.OPEN_INGREDIENTS_POPUP });
export const closeIngredientPopup = () => ({ type: CONST.CLOSE_INGREDIENTS_POPUP });
export const toggleIngredientPopup = () => ({ type: CONST.TOGGLE_INGREDIENTS_POPUP });
export const isOpenCloseIngredientPopup = () => ({type: CONST.IS_OPEN_CLOSE_INGREDIENTS_POPUP});