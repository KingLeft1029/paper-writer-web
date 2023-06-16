import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjFkMjhlYTBkLWZjZWItNDM4OS1hNjUwLTNkNzg2YjIxMTFkZCJ9.g2QVbfoFKLkaEWgr9VM6jp1RzDHIXai43R_VfuOqMM5ogD5qKj431KbaSGpyUSK5Zz43F79K4Mcv5oBo6FGamw'
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
