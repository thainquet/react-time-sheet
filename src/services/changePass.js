import axios from 'axios'

const changePassword = (params) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/changePass`, params);
}

export default {
  changePassword
}