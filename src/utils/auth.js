import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjAwYzJjYWE2LTVmZmItNGI3Ni1iZmI4LTEzZTM2ZjU2YmUzYiJ9.zA9jju49Nz76eznez_UPqu-S8ox63VYLNCjBpc03rXb6IPxU6HzHJA91yfNRTTyE_b0rWkBDAsp5rxLW8z9BIw'
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
