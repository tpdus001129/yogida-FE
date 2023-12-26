import api from '.';

const API_URL = '/api/v1/comments';

const commentAPI = {
  async getAllCommentsByMe() {
    return await api.get(API_URL + '/my-page');
  },
  async removeOne({ id }) {
    return await api.delete(API_URL + `/${id}`);
  },
};

export default commentAPI;
