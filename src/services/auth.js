import axios from 'axios'

const login = (params) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/login`, params);
}

export default {
  login
}