import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getErrorMessage } from './status' // 引入状态码文件

// 设置接口超时时间
axios.defaults.timeout = 60000

// 请求地址，这里是动态赋值的的环境变量，下一篇会细讲，这里跳过
// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    //设置请求头
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8' // 传参方式json
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//响应拦截
axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      const errmsg = getErrorMessage(response.status) // 传入响应码，匹配响应码对应信息
      ElMessage.warning(errmsg)
      return Promise.reject(response)
    } else {
      ElMessage.warning('网络连接异常,请稍后再试!')
    }
  }
)

// 封装 GET POST 请求并导出
export function request(url = '', params = {}, type = 'POST') {
  //设置 url params type 的默认值
  return new Promise((resolve, reject) => {
    let promise
    if (type.toUpperCase() === 'GET') {
      promise = axios({
        url,
        params
      })
    } else if (type.toUpperCase() === 'POST') {
      promise = axios({
        method: 'POST',
        url,
        data: params
      })
    } else {
      const errmsg = `请求方法[${type}]不支持`
      ElMessage.warning(errmsg)
      return reject(errmsg)
    }
    //处理返回
    promise
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default axios
