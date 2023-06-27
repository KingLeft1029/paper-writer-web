import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6Ijg3YTE4MGQ5LTg0YWYtNGNmZS1hMGJlLWFlYjgzY2Y2YzE5OSJ9.7DMLrmIDAGCkVokLK5J2b8J_mVrbGyf5SwKTCPq-jGPQYrhXld96i8P7-YYEQWXwx66xgpYLd7aji1N8G7nI8w'
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
