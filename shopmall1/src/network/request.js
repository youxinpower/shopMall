import axios from 'axios'

export function request(config){
  const instance=axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })
  instance.interceptors.request.use(config=>{
    return config
  },error => {
    console.log('request-error');
  })
  instance.interceptors.response.use(config=>{
    return config
  },error => {
    console.log('response-error');
  })

  return instance(config)

}

