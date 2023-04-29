export const BASE_URL = "https://norma.nomoreparties.space/api";

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().catch((err) => Promise.reject(err));
};

export const getIngredientsData = () => {
  return fetch("https://norma.nomoreparties.space/api/ingredients")
    .then(checkResponse)
}
