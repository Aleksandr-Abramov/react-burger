export const GET_INGRIDIENTS = "GET_INGRIDIENTS";
export const COUNTER_PLAS = "COUNTER_PLAS";

const initialState = {
    ingredients: [],
}

export const BurgerIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGRIDIENTS:
            return {...state, ingredients: action.payload}

    
        default:
            return state;
    }
}