/*
 * @Author: coller
 * @Date: 2022-10-21 19:16:05
 * @LastEditTime: 2022-10-21 19:16:09
 * @Desc:
 */
import axios from "axios";
import { get } from "lockr";

const http = axios.create({
  baseURL: "/api", // 基础请求地址
  timeout: 10000, // 请求超时设置
  withCredentials: false, // 跨域请求是否需要携带 cookie
});

http.interceptors.request.use(
  (config) => {
    // 可使用async await 做异步操作
    if (get("authKey")) {
      config.headers["authKey"] = get("authKey");
    }
    if (!config.headers["notEnt"]) {
      // 设置了企业请求
      const entId = get("entId");
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
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { http };
