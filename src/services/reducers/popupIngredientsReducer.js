export const OPEN_INGREDIENTS_POPUP = 'OPEN_INGREDIENTS_POPUP';
export const CLOSE_INGREDIENTS_POPUP = "CLOSE_INGREDIENTS_POPUP";
export const TOGGLE_INGREDIENTS_POPUP = "TOGGLE_INGREDIENTS_POPUP";
export const IS_OPEN_CLOSE_INGREDIENTS_POPUP = "IS_OPEN_CLOSE_INGREDIENTS_POPUP";

const initialState = {
    isOpenClose: false,
}


export const popupIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_INGREDIENTS_POPUP:
            return {...state, isOpenClose: true}
        case CLOSE_INGREDIENTS_POPUP:
            return {...state, isOpenClose: false}
        case TOGGLE_INGREDIENTS_POPUP:
            return {...state, isOpenClose: !state.isOpenClose}
        case IS_OPEN_CLOSE_INGREDIENTS_POPUP:
            return {...state, isOpenClose: state.isOpenClose}
        default:
            return state;
    }
}
// export const openIngredientPopup = () => ({type: OPEN_INGREDIENTS_POPUP}) 
// export const closeIngredientPopup = () => ({type: CLOSE_INGREDIENTS_POPUP}) 
// export const toggleIngredientPopup = () => ({type: TOGGLE_INGREDIENTS_POPUP}) 
// export const isOpenCloseIngredientPopup = () => ({type: IS_OPEN_CLOSE_INGREDIENTS_POPUP}) 