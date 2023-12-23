import api from '.';

const API_URL = '/api/v1/auth';

const authAPI = {
  async signup({ snsId, email, password, nickname, profileImageUrl, type }) {
    return await api.post(API_URL + '/signup', { snsId, email, password, nickname, profileImageUrl, type });
  },

  async login({ email, password }) {
    const res = await api.post(API_URL + '/login', { email, password });
    return res.data;
  },

  async logout() {
    return await api.get('/logout');
  },

  async getEmailVerifyCode({ email }) {
    return await api.post(API_URL + '/signup/auth-mail', { email });
  },

  async checkEmailVerifyCode({ email, authCode }) {
    return await api.post(API_URL + '/signup/check-mail', { email, authCode });
  },

  async getKakaoUserInfo() {
    return await api.get(API_URL + '/kakao/me');
  },
};

export default authAPI;
