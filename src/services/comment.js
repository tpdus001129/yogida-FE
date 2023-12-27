import api from '.';

const API_URL = '/api/v1/comments';

const commentAPI = {
  async getAllCommentsByMe() {
    return await api.get(API_URL + '/my-page');
  },
  async getAllCommentByPost(postId) {
    return await api.get(API_URL + `?postId=${postId}`);
  },
  async postComment(postId, content) {
    console.log('api content', content);
    return await api.post(API_URL, { postId, content });
  },
  async removeOne({ id }) {
    return await api.delete(API_URL + `/${id}`);
  },
};

export default commentAPI;
