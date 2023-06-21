
export const BASE_URL = "https://norma.nomoreparties.space/api";

type TPATCH_HEADERS = {
  method: string;
  headers: {
      "Content-Type": string;
      authorization: string;
  };
  body: string
}

type TGET_HEADERS = {
  method: string;
  headers: {
      "Content-Type": string;
      authorization: string;
  };
}

export const checkResponse = (res: Response)=> {
  return res.ok ? res.json() : res.json().then((err: Error) => Promise.reject(err));
};

export const getIngredientsData = () => {
  return fetch(`${BASE_URL}/ingredients`).then(checkResponse);
};

export const GET_HEADERS = {
  method: "GET",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    authorization: `${localStorage.getItem("accessToken")}`,
  },
};

export const PATCH_HEADERS = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    authorization: `${localStorage.getItem("accessToken")}`,
  },
  // body: JSON.stringify(value),
};
/**
 * Восстановление пароля
 */
export const forgotPassword = (emailData:{email: string;}) => {
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
export const resetPassword = (resetPsswordData: {password: string,token: string}) => {
  return fetch(`${BASE_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resetPsswordData),
  }).then(checkResponse);
};

/**
 * Обновить accessToken
 */
export const requestRefreshToken = () => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};
/**
 * Получить/изменить данные о пользователе.
 */
export const fetchWithRefresh = async (url: string, options: TPATCH_HEADERS | TGET_HEADERS) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if ((err instanceof Error) && err.message === "jwt expired") {
      const refreshData = await requestRefreshToken();

      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};
