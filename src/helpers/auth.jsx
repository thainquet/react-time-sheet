export const isLogin = () => {
  return localStorage.getItem('auth') === 'true'
}