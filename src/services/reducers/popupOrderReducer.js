export const OPEN_ORDER_POPUP = 'OPEN_ORDER_POPUP';
export const CLOSE_ORDER_POPUP = "CLOSE_INGREDIENTS_POPUP";
export const TOGGLE_ORDER_POPUP = "TOGGLE_INGREDIENTS_POPUP";
export const IS_OPEN_CLOSE_ORDER_POPUP = "IS_OPEN_CLOSE_INGREDIENTS_POPUP";

const initialState = {
    isOpenCloseOrder: false,
}


export const popupOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_ORDER_POPUP:
            return {...state, isOpenCloseOrder: true}
        case CLOSE_ORDER_POPUP:
            return {...state, isOpenCloseOrder: false}
        case TOGGLE_ORDER_POPUP:
            return {...state, isOpenCloseOrder: !state.isOpenCloseOrder}
        case IS_OPEN_CLOSE_ORDER_POPUP:
            return {...state, isOpenCloseOrder: state.isOpenCloseOrder}
        default:
            return state;
    }
}