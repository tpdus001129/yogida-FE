import api from '.';

const API_URL = '/api/v1/likes';

const likesAPI = {
  async getAllLikesByMe() {
    return await api.get(API_URL);
  },

  async removeAll(payload) {
    return await api.patch(API_URL, payload);
  },
};

export default likesAPI;
