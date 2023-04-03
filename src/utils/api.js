export const BASE_URL = "https://norma.nomoreparties.space/api"

class Api {
  constructor(BASE_URL) {
    this.urlApi = `${BASE_URL}/ingredients`;
  }

  validationJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getData() {
    return fetch(`${this.urlApi}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => this.validationJson(res));
  }
}

const api = new Api(BASE_URL);

export default api;
