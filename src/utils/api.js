const URLAPI = "https://norma.nomoreparties.space/api/ingredients";
class Api {
  constructor(urlApi) {
    this.urlApi = urlApi;
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

const api = new Api(URLAPI);

export default api;
