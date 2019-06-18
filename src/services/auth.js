import axios from 'axios'

const login = (params) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/login`, params);
}

const changePassword = (params) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/changePass`, params);
}

const forgotPassword = (params) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/forgotPass`, params);
}

export default {
  login, changePassword, forgotPassword
}