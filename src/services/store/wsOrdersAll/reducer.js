const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
const WS_GET_MESSAGE = "WS_GET_MESSAGE";

const initialState = {
  wsConnect: false,
  message: [],
  error: "",
};

const wsOrdersAllReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnect: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnect: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnect: false,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        message: [...state.message, action.payload],
      };

    default:
      return state;
  }
};

export { wsOrdersAllReducer };
