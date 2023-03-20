export const OPEN_ORDER_POPUP = 'OPEN_INGREDIENTS_POPUP';
export const CLOSE_ORDER_POPUP = "CLOSE_INGREDIENTS_POPUP";
export const TOGGLE_ORDER_POPUP = "TOGGLE_INGREDIENTS_POPUP";
export const IS_OPEN_CLOSE_ORDER_POPUP = "IS_OPEN_CLOSE_INGREDIENTS_POPUP";

const initialState = {
    isOpenClose: false,
}


export const popupOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_ORDER_POPUP:
            return {...state, isOpenClose: true}
        case CLOSE_ORDER_POPUP:
            return {...state, isOpenClose: false}
        case TOGGLE_ORDER_POPUP:
            return {...state, isOpenClose: !state.isOpenClose}
        case IS_OPEN_CLOSE_ORDER_POPUP:
            return {...state, isOpenClose: state.isOpenClose}
        default:
            return state;
    }
}