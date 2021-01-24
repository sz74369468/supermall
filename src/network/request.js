import axios from "axios";

// 方案一
// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })
//
//   // 2.发送真正的网络请求
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

// 方案二
// export function request(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:7878/api/m5',
//     timeout: 5000
//   })
//
//   // 2.发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }

// 方案三
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:7878/api/m5',
//       timeout: 5000
//     })
//
//     // 2.发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 方案四
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    // console.log(config);
    // ①比如config中的一些信息，不符合服务器的要求
    // ②比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // ③某些网络请求(比如登录(令牌token))，必须携带一些特殊的信息
    return config
  }, err => {
    // console.log(err);
  });

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    // res.data
    return res.data
  }, err => {
    console.log(err);
  });

  // 3.发送真正的网络请求 返回了promise
  return instance(config)
}
