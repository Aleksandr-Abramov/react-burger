export const GET_INGRIDIENTS_REQUEST = "GET_INGRIDIENTS_REQUEST";
export const GET_INGRIDIENTS_ERRORE = "GET_INGRIDIENTS_ERRORE";
export const GET_INGRIDIENTS_SUCCESS = "GET_INGRIDIENTS_SUCCESS";

const initialState = {
  ingredients: [],
  isLoading: false,
  message: "",
};

export const BurgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGRIDIENTS_REQUEST:
      return { ...state, ingredients: action.payload };
    case GET_INGRIDIENTS_SUCCESS:
      return { ...state, isLoading: action.payload };
    case GET_INGRIDIENTS_ERRORE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
