import api from '.';

const API_URL = '/api/v1/likes';

const likesAPI = {
  async getAllLikesByMe() {
    return await api.get(API_URL);
  },

  async postLike(userId, postId) {
    const requestBody = {
      userId: userId,
      postId: postId,
    };
    return await api.post(`API_URL ${postId}`, requestBody);
  },

  async removeAll(payload) {
    return await api.patch(API_URL, payload);
  },
};

export default likesAPI;
