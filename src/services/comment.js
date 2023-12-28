import api from '.';

const API_URL = '/api/v1/comments';

const commentAPI = {
  async getAllCommentsByMe() {
    return await api.get(API_URL + '/mine');
  },
  async getAllCommentByPost(postId) {
    return await api.get(API_URL + `?postId=${postId}`);
  },
  async postComment(postId, content) {
    return await api.post(API_URL, { postId, content });
  },
  async updateComment({ commentId, content }) {
    return await api.patch(API_URL + `/${commentId}`, { content });
  },
  async removeOne(id) {
    console.log(id);
    return await api.delete(API_URL + `/${id}`);
  },
};

export default commentAPI;
