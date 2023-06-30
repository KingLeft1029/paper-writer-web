import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjAzMjZmMmY2LTc2OWYtNDdjZS1iN2VkLWRjNjA3OTYzOTYxYiJ9.6dtSP0rlzFmq3Ssr-29-cOyK2G1Y56APhCHgh-cso2dRumrEMUDMxijwzVXW7XDzW5L2zPGyGpapAnIY_hfSjQ'
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
