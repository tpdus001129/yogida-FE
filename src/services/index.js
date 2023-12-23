import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, //데이터를 요청할 기본 주소
  timeout: 5000, // 요청이 timeout보다 오래 걸리면 요청이 중단된다.
  withCredentials: true, //서로 다른 도메인(크로스 도메인)에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목
});
// credential 정보가 포함되어 있는 요청은 아래 두 가지 경우
// 1. 쿠키를 첨부해서 보내는 요청
// 2. 헤더에 Authorization 항목이 있는 요청

/*
    1. 요청 인터셉터
    2개의 콜백 함수를 받습니다.
*/
api.interceptors.request.use(
  function (config) {
    // 요청 성공 직전 호출됩니다.
    config.headers = config.headers ?? {};
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  function (error) {
    // 요청 에러 직전 호출됩니다.
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  },
);

/*
    2. 응답 인터셉터
    2개의 콜백 함수를 받습니다.
*/
api.interceptors.response.use(
  function (response) {
    /*
        http status가 200인 경우
        응답 성공 직전 호출됩니다. 
    */
    console.log('Response Interceptor:', response);
    return response;
  },

  function (error) {
    /*
        http status가 200이 아닌 경우
        응답 에러 직전 호출됩니다.
    */

    console.error('Response Interceptor Error:', error);
    // return Promise.reject(error);
  },
);
export default api;
