const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
const WS_GET_MESSAGE = "WS_GET_MESSAGE";
const WS_SEND_MESSAGE = "WS_SEND_MESSAGE";


const wsOrdersAllMiddleware = (wsUrl) => {
  return (store) => {
    let socket;
    return (next) => (action) => {
      const { dispatch, getState } = store;
      socket = new WebSocket(`${wsUrl}`);
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        };
        socket.onerror = (event) => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        };
        socket.onmessage = (event) => {
          const parsedData = JSON.parse(event.data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: WS_GET_MESSAGE, payload: { ...restParsedData } });
        };
        socket.onclose = (event) => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        if (action.type === WS_SEND_MESSAGE) {
            const payload = action.payload;
            const message = { ...payload };
            socket.send(JSON.stringify(message));
        }
      }
      next(action);
    };
  };
};

export { wsOrdersAllMiddleware };
