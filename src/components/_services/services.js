import {URL_LOGIN, URL_REGISTRATION, URL_USERS} from "../../endpoints";

export const userService = {
  login,
  logout,
  register,
  sendResults
  // getById,
};

function sendResults(id, results) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' ,
      'Authorization': `${localStorage.getItem('user').token}`
    },
    body: JSON.stringify({ results })
  };

  return fetch(`${URL_USERS}/${id}/skillset`, requestOptions)
    .then(handleResponse)
}

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  return fetch(`${URL_LOGIN}`, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('id');
}

// function getById(id) {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader()
//   };
//
//   return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
// }

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${URL_REGISTRATION}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
