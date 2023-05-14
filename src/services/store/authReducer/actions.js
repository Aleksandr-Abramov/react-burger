import { IS_USER_CHECKED, IS_USER_AUTHENTIFICATED, CHANGE_RESET_PASSWORD } from "./reducer";

export const isUserChecked = (payload) => ({type: IS_USER_CHECKED, payload})
//export const userAuthentificated = (payload) => ({type: IS_USER_AUTHENTIFICATED, payload})
export const changeResetPassword = (payload) => ({type: CHANGE_RESET_PASSWORD, payload})