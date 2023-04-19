export const GET_ORDER_DATA = "GET_ORDER_DATA";
export const SET_ORDER_DATA = "SET_ORDER_DATA"

const initialState = {
 order: 0,
 name: null,   
}

export const OrderDetails = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER_DATA:
            return {...state, order: action.payload.order.number, name:  action.payload.name}
        default:
            return state;
    }
}