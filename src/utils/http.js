/*
 * @Author: coller
 * @Date: 2022-10-21 19:16:05
 * @LastEditTime: 2022-10-29 16:40:55
 * @Desc:
 */
import axios from "axios";

const http = axios.create({
  baseURL: "/api", // 基础请求地址
  timeout: 10000, // 请求超时设置
  withCredentials: false, // 跨域请求是否需要携带 cookie
});

http.interceptors.request.use(
  (config) => {
    // 可使用async await 做异步操作
    const authKey = localStorage.getItem("authKey");
    if (authKey) {
      config.headers["authKey"] = authKey;
    }
    if (!config.headers["notEnt"]) {
      // 设置了企业请求
      const entId = localStorage.getItem("entId");
      if (entId) {
        config.url = "ent_" + entId + "/m/v1/" + config.url;
      }
    }
    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);
http.interceptors.response.use(
  (res) => {
    if (res.data.code === 5) {
      location.reload();
    }
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { http };
