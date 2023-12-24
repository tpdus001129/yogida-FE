import axios from 'axios';
import api from '.';

const API_URL = '/api/v1/posts';

// 메인 페이지 GET
export async function getPostsAllList() {
  try {
    const res = await axios.get('http://localhost:5500/api/v1/posts');
    return res.data.posts;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

// 상세 페이지 GET
export async function getPostByPostId(postId) {
  try {
    const res = await axios.get(`http://localhost:5500/api/v1/posts/${postId}`);
    return res.data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

const postsAPI = {
  async getAllPostsByMe() {
    return await api.get(API_URL + '/my-page');
  },

  async removeOne(id) {
    return await api.delete(API_URL + `/${id}`);
  },

  async updateOne({ id, payload }) {
    return await api.put(API_URL + `/${id}`, payload);
  },
};

export default postsAPI;

// import api from '.';

// const postAPI = {
//   async getPostsAllList() {
//     const res = await api.get('/api/v1/posts');
//     return res.data;
//   },
// };

// export default postAPI;
