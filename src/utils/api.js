export const BASE_URL = "https://norma.nomoreparties.space/api";

export const checkResponse = (res) => {
  // return res.ok ? res.json() : res.json().catch((err) => Promise.reject(err));
  return res.ok ? res.json() : Promise.reject(res);
};

export const getIngredientsData = () => {
  return fetch(`${BASE_URL}/ingredients`).then(checkResponse);
};
/**
 * Регистрация
 */
export const registerUser = (registerUserData) => {
  console.log(registerUserData);
  return fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerUserData),
  })
    .then(checkResponse)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};
/**
 * Восстановление пароля
 */
export const forgotPassword = (emailData) => {
  console.log(JSON.stringify(emailData));
  return fetch(`${BASE_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  })
    .then(checkResponse)
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
    });
};
/**
 * Восстановление пароля
 */
export const resetPassword = (resetPsswordData) => {
  return fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resetPsswordData),
  })
    .then(checkResponse)
    .then((result) => console.log(result))
    .catch((err) => {
      console.log(err);
    });
};

