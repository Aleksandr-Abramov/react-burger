export const OPEN_INGREDIENTS_POPUP = 'OPEN_INGREDIENTS_POPUP';
export const CLOSE_INGREDIENTS_POPUP = "CLOSE_INGREDIENTS_POPUP";
export const TOGGLE_INGREDIENTS_POPUP = "TOGGLE_INGREDIENTS_POPUP";
export const IS_OPEN_CLOSE_INGREDIENTS_POPUP = "IS_OPEN_CLOSE_INGREDIENTS_POPUP";

const initialState = {
    isOpenCloseIngredient: false,
}


export const popupIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_INGREDIENTS_POPUP:
            return {...state, isOpenCloseIngredient: true}
        case CLOSE_INGREDIENTS_POPUP:
            return {...state, isOpenCloseIngredient: false}
        case TOGGLE_INGREDIENTS_POPUP:
            return {...state, isOpenCloseIngredient: !state.isOpenCloseIngredient}
        case IS_OPEN_CLOSE_INGREDIENTS_POPUP:
            return {...state, isOpenCloseIngredient: state.isOpenCloseIngredient}
        default:
            return state;
    }
}