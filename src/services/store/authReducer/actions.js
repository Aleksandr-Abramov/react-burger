import { IS_USER_CHECKED, IS_USER_AUTHENTIFICATED } from "./reducer";

export const isUserChecked = (payload) => ({type: IS_USER_CHECKED, payload})
export const userAuthentificated = (payload) => ({type: IS_USER_AUTHENTIFICATED, payload})