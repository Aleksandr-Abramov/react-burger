export const GET_INGRIDIENTS_REQUEST = "GET_INGRIDIENTS_REQUEST";
export const GET_INGRIDIENTS_ERRORE = "GET_INGRIDIENTS_ERRORE";
export const GET_INGRIDIENTS_SUCCESS = "GET_INGRIDIENTS_SUCCESS";

const initialState = {
  ingredients: [],
  isLoading: null,
  error: null,
};

export const BurgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGRIDIENTS_REQUEST:
      return { ...state, isLoading: action.payload, error: null};
    case GET_INGRIDIENTS_SUCCESS:
      return { ...state, isLoading: false, ingredients: action.payload };
    case GET_INGRIDIENTS_ERRORE:
      return { ...state, isLoading: false, error: action.payload  };
    default:
      return state;
  }
};
