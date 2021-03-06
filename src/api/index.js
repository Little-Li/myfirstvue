//导入axios
import axios from 'axios'

//设置请求根路径
const baseURL = 'http://www.lovegf.cn:8888/api/private/v1/'
axios.defaults.baseURL = baseURL

//添加请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = localStorage.getItem('mytoken')
  if(token){
    config.headers['Authorization'] = token
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
//登录验证
export const checkUser = params => {
    return axios.post('login', params).then(res => res.data)
  }
  //获取用户列表
export const getUserList = params => {
  return axios.get('users', params).then(res => res.data)
}