import Cookies from 'js-cookie'

const TokenKey = 'qy_pc'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getCookie(key) {
  return Cookies.get(key)
}

export function removeCookie(key) {
  return Cookies.remove(key)
}

export function setCookie(key, value) {
  return Cookies.set(key, value)
}

export function getLocaStorage(key) {
  const data = localStorage.getItem(key)
  return typeof data === 'string' ? JSON.parse(data) : null
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function removeLocalStorage(key) {
  localStorage.remove(key)
}

export function getSessionStorage(key) {
  const data = sessionStorage.getItem(key)
  return typeof data === 'string' ? JSON.parse(data) : null
}

export function setSessionStorage(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export function removeSessionStorage(key) {
  sessionStorage.remove(key)
}
