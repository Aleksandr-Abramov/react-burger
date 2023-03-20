import * as CONST from "../reducers/popupOrderReducer";

export const openOrderPopup = () => ({type: CONST.OPEN_ORDER_POPUP})
export const closeOrderPopup = () => ({type: CONST.CLOSE_ORDER_POPUP})
export const toggleOrderPopup = () => ({type: CONST.TOGGLE_ORDER_POPUP})
export const isOpenCloseOrderPopup = () => ({type: CONST.TOGGLE_ORDER_POPUP})