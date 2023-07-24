
const wsOrdersAllMiddleware = () => {
  return (store) => {
    
    return (next) => (action) => {
      let socket;
      const { dispatch } = store;
      const { type, payload } = action; // тут мы деструктуризируем наш экшн, чтобы проще было получать данные

      if (type === "WEBSOCKET_CONNECT") {
        // тут мы проверяем пролученный экшен и если у него тип WEBSOCKET_CONNECT то проваливаемся в иф и дальше создаем сокет соединение
        socket = new WebSocket(payload); // в пейлоаде нам приходит урл для подключения, который мы передали выше в диспатч dispatch(websocketConnect(url))

        // Далее вешаем обработчики на наше сокет соединение
        socket.onopen = (event) => {
          // обработчик, который вызывается при открытии соединения и диспатчит экшен об этом
          
          dispatch({ type: "WEBSOCKET_OPEN",  });
        };

        socket.onerror = (event) => {
          // обработчик ошибки, тоже с диспатчем
          console.log(event);
          dispatch({ type: "WEBSOCKET_ERROR", payload: event });
        };

        // тут мы вешаем обработчик, который вызывается при получении сообщения по вебсокет соединению
        // то есть каждый раз когда мы получаем сообщение по вебсокету, будет вызываться эта функция, которая диспатчит это сообщение к нам в редьюсер
        socket.onmessage = (event) => {

          const { data } = event; // в эвенте как раз хранятся данные, которые приходят нам по вебсокету

          const parsedData = JSON.parse(data); // на всякий случай парсим полученные данные в js объект
          dispatch({
            type: "WEBSOCKET_MESSAGE",
            payload: {
              data: parsedData,
            },
          });
        };

        socket.onclose = (event) => {
          dispatch({ type: "WEBSOCKET_CLOSE" });
        };
      }

      if (type === "WEBSOCKET_CLOSE" && socket) {
        socket.close();
      }

      next(action);
    };
  };
};

export { wsOrdersAllMiddleware };
