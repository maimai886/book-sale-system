import axios, { AxiosRequestConfig, AxiosRequestHeaders,AxiosResponse  } from 'axios';
import { showMessage } from "./status";
import { message as messageApi } from 'antd';

/**
 * 創建axios實例
 */
const ENV = process.env.NODE_ENV;
const host = ENV === 'development' ? 'http://127.0.0.1:3000' : 'http://54.244.89.138:3000';
const service = axios.create({
    baseURL: host,
    timeout: 3000,
});

interface ResType {
  [key: string]: any;
    code:number;
    message?:string;
    data?:Object;
}

/**
 * 請求攔截
 */

service.interceptors.request.use((config: any) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: token
        };
    }
    return config
})


/**
 * 響應攔截
 */
service.interceptors.response.use((res:AxiosResponse<any>) => {
    console.log(res)
    const { code, data, message, token } = res.data;
    if (code == 0) {


        if (data.action == 'register' || data.action == 'login') {
            messageApi.open({
                type: 'success',
                content: `${message}`,
            });
        }

        if (res.data.data) {
            res.data.data = backToFront(res.data.data);
          }

    } else if (message == '身份認證失敗') {
        localStorage.setItem('token', 'custom')

        messageApi.open({
            type: 'warning',
            content: `まだログインしていないため、一部の機能が使えませんかもしれません`,
        });

    } else {
        messageApi.open({
            type: 'warning',
            content: `${message}`,
        });
    }
    return res.data;
});

/**
 * 封裝請求函數
 */
const request = (options: AxiosRequestConfig<any>) => {
    if (options.method === 'get') {
        options.params = options.data;
    }
    return service(options);
};

function backToFront(params:ResType) {
    if (typeof params === 'object') {
        for (let key in params) {
          let newKey = key;
          if (key.includes('_')) {
            newKey = key.replaceAll(/_([a-zA-Z])/g, (match, p1) => p1.toUpperCase());
          }
          if (newKey !== key) {
            params[newKey] = params[key];
            delete params[key];
          }
          if (typeof params[newKey] === 'object') {
            params[newKey] = backToFront(params[newKey]);
          }
        }
      }
      return params;
}

export default request;