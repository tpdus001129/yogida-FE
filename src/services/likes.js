import api from '.';

const API_URL = '/api/v1/likes';

const likesAPI = {
  async getAllLikesByMe() {
    return await api.get(API_URL);
  },

  async removeAll() {
    return await api.delete(API_URL);
  },
};

export default likesAPI;
