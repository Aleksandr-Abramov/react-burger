export const GET_INGREDIENT = "GET_INGREDIENT";
export const SET_INGREDIENT = "SET_INGREDIENT";

const initialState = {
    ingredient: [],
}

export const BurgerIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENT:
            return {...state, ingredient: {...state.ingredient}}
        case SET_INGREDIENT:
            return {...state, ingredient: action.peyload}
        default:
            return state;
    }
}