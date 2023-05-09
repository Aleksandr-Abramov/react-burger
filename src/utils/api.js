

export const BASE_URL = "https://norma.nomoreparties.space/api";

export const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsData = () => {
  return fetch(`${BASE_URL}/ingredients`).then(checkResponse);
};
// /**
//  * Регистрация
//  */
// export const registerUser = (registerUserData) => {
//   return fetch(`${BASE_URL}/auth/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(registerUserData),
//   })
//     .then(checkResponse)
//     .then((res) => console.log(res))
//     .catch((err) => {
//       console.log(err);
//     });
// };



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
  }).then(checkResponse);
};
/**
 * Сброс пароля
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
};

/**
 * Обновить accessToken
 */
export const refreshToken = () => {
  fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  })
    .then(checkResponse)
    .then((res) => {
      console.log(res);
      localStorage.setItem(
        "accessToken",
        res.accessToken.replace("Bearer ", "") || ""
      );
      localStorage.setItem("refreshToken", res.refreshToken);
    })
    .catch((err) => {
      console.log(err);
    });
};