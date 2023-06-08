export const USER_LOGIN_AUTHORIZATION = "USER_LOGIN_AUTHORIZATION";
export const LOGOUT_USER = "LOGOUT_USER";
export const CHANGE_USER_DATA = "CHANGE_USER_DATA";
export const IS_USER_CHECKED = "IS_USER_CHECKED";
export const IS_USER_AUTHENTIFICATED = "IS_USER_AUTHENTIFICATED";
export const CHANGE_RESET_PASSWORD = "CHANGE_RESET_PASSWORD";

const initialState = {
  success: false,
  user: false,
  isAuthChecked: false,
  resetPassword: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_AUTHORIZATION:
      return {
        ...state,
        user: { ...action.payload },
        oldUserData: { ...action.payload },
        success: true,
      };
    case CHANGE_USER_DATA:
      return { ...state, user: { ...action.payload } };
    case LOGOUT_USER:
      return { ...state, user: null, oldUserData: false, success: false };
    case IS_USER_CHECKED:
      return { ...state, isAuthChecked: action.payload };
    case CHANGE_RESET_PASSWORD:
      return { ...state, resetPassword: action.payload };
    default:
      return state;
  }
};
