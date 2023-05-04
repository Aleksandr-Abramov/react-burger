export const USER_LOGIN_AUTHORIZATION = "USER_LOGIN_AUTHORIZATION";
export const LOGOUT_USER = "LOGOUT_USER";
export const CHANGE_USER_DATA = "CHANGE_USER_DATA";
export const IS_USER_CHECKED = "IS_USER_CHECKED";
export const IS_USER_AUTHENTIFICATED = "IS_USER_AUTHENTIFICATED";

const initialState = {
    success: false,
    user: null,
    oldUserData: null,
    isAuthChecked: false,
    isUserAuthentificated: false
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_AUTHORIZATION:
            return {...state, user: {...action.payload}, oldUserData : {...action.payload}, success: true}
        case CHANGE_USER_DATA:
            return {...state, user: {...action.payload}, }
        case LOGOUT_USER:
            return {...state, user: null, oldUserData:false, success: false}
        case IS_USER_CHECKED:
            return {...state, isAuthChecked: action.payload}
        case IS_USER_AUTHENTIFICATED:
            return {...state, isUserAuthentificated: action.payload}
        default:
            return state;
    }
}