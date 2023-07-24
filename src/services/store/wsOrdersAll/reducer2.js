export const WEBSOCKET_OPEN = "WEBSOCKET_OPEN";
export const WEBSOCKET_ERROR = "WEBSOCKET_ERROR";
export const WEBSOCKET_CLOSE = "WEBSOCKET_CLOSE";
export const WEBSOCKET_MESSAGE = "WEBSOCKET_MESSAGE";

export const initialState = {
  data: [],
  total: 0,
  totalToday: 0,
  isOpen: false,
  error: null,
};

const wsOrdersAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEBSOCKET_OPEN: {
      return {
        ...state,
        isOpen: true,
        error: null,
      };
    }
    case WEBSOCKET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case WEBSOCKET_CLOSE: {
      return {
        ...state,
        isOpen: false,
      };
    }
    case WEBSOCKET_MESSAGE: {
      // наверное самый важный это этот кейс, где мы кладем полученные заказы в стейт. Потом отображаем эти заказы на компоненте
      return {
        ...state,
        data: action.payload.data.orders,
        total:  action.payload.data.total,
        totalToday: action.payload.data.totalToday,
      };
    }
    default: {
      return state;
    }
  }
};

export { wsOrdersAllReducer };
