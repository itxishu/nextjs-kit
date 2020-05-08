import axios from 'axios';
import config from './config';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 50000;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = config.baseURL;

// 中间件 拦截请求-
axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    // console.log(err, '======error1')
    if (!err.response) {
      return;
    }
    const res = err.response;
    if ([500, 502, 503].indexOf(res.status) > -1) {
      console.error('500服务端错误，请稍后重试！');
    } else if (res.status === 401) {
      console.error('需要登陆授权');
    } else if (res.status === 403) {
      console.error('抱歉！你暂无权限操作此功能');
    } else if ([400, 404].indexOf(res.status) > -1) {
      console.error('400/404 接口请求失败，请重试！如有疑问，联系管理员。');
    }
  }
);

/**
 * get
 * @param url
 * @param data
 * @returns {Promise}
 */

const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then(response => {
        if (response && response.data) {
          resolve(response.data);
        } else {
          resolve({ data: [] });
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

/**
 * post
 * @param url
 * @param data
 * @returns {Promise}
 */

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        resolve(response.data);
      },
      error => {
        reject(error);
      }
    );
  });
};

export default {
  get,
  post
};
