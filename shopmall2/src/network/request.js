import axios from 'axios'

export function request(config) {
  //创建axios 实例
  const instance=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //创建请求拦截器
  instance.interceptors.request.use(config =>{
    return config
  },error => {
    console.log("error")
  })

  instance.interceptors.response.use(config=>{
    return config
  },error => {
    console.log("response-error")})
  //发送请求
  return instance(config);
}
