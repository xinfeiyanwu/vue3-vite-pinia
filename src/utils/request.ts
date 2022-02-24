import axios from 'axios'
import {useUserStore} from '@/store/user'
const userStore = useUserStore()
// import axios, {AxiosInstance} from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.BASE_URL
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    config.headers['x-token'] = userStore.token
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  
export default instance