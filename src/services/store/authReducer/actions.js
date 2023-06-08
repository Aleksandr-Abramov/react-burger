import { IS_USER_CHECKED, CHANGE_RESET_PASSWORD } from "./reducer";

export const isUserChecked = (payload) => ({type: IS_USER_CHECKED, payload})
export const changeResetPassword = (payload) => ({type: CHANGE_RESET_PASSWORD, payload})