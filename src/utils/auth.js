export const BASE_URL = 'https://auth.nomoreparties.co'

const handleResponse = response => response.ok ? response.json() : Promise.reject(`Error: ${response.status}`)

export function register(data) {
  return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  }).then(handleResponse);
}

export function authorize(data) {
  return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  }).then(handleResponse);
}


export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      },
  }).then(handleResponse);
}