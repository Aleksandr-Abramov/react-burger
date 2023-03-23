export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_BUN_INGREDIENT_BUN = "ADD_BUN_INGREDIENT_BUN";
export const DRAG_ON = "DRAG_ON";
export const DRAG_OFF = "DRAG_OFF";

const initialState = {
  bun: null,
  ingredients: [],
  isDrag: false,
};

export const BurgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.peyload] };

    case ADD_BUN_INGREDIENT_BUN:
      return { ...state, bun: action.peyload };

    case DRAG_ON:
      return { ...state, isDrag: true };

    case DRAG_OFF:
      return { ...state, isDrag: false };

    default:
      return state;
  }
};
