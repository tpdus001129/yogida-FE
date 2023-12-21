import api from '.';

const API_URL = '/api/v1/users';

const userAPI = {
  async checkNickname({ nickname }) {
    return await api.post(API_URL + '/check/nickname', { nickname });
  },
};

export default userAPI;
