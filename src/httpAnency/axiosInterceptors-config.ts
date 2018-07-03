/**
 * Created by f on 2018/4/27.
 */
import axios, {AxiosRequestConfig} from 'axios'
import apiconfig from '../api-config'
import State  from '../store'
import qs from 'qs'
import {async} from "rxjs/scheduler/async";
let ax = axios.create();

ax.interceptors.request.use(async (config) => {
  config.baseURL = apiconfig.baseURL;
  config.headers = config.headers || {};
  config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8;text/html";
  await addTokenToHeader(config).then((data: any) => {
    config.headers["Access-Token"] = data;
  })
  config.timeout = apiconfig.timeout;
  config.method = "post";
  config.data = setQsTOData(config.data);
  return config;
});

ax.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
})

function addTokenToHeader(config: any) {
  return new Promise((resolve, reject) => {
    resolve(State.getters.getAccessToken);
  })
}

function setQsTOData(data: object) {
  return qs.stringify(data)
}

export default ax;
