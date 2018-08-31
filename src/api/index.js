//导入axios
import axios from 'axios'

//设置请求根路径
const baseURL = 'http://localhost:8888/api/private/v1/'
axios.defaults.baseURL = baseURL

//登录验证
export const checkUser = params => {
    return axios.post('login', params).then(res => res.data)
  }