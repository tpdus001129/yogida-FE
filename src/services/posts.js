import axios from 'axios';
import api from '.';

const API_URL = '/api/v1/posts';

// 메인 페이지 GET
export async function getPostsAllList() {
  try {
    const result = await axios.get('http://localhost:5500/api/v1/posts');
    return result.data.posts;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

// 상세 페이지 GET
export async function getPostByPostId(postId) {
  try {
    const result = await axios.get(`http://localhost:5500/api/v1/posts/${postId}`);
    return result.data;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

// 검색 페이지 GET
export async function getPostSearchCity(city) {
  try {
    const result = await axios.get(`http://localhost:5500/api/v1/posts/search?city=${city}`);
    return result.data.posts;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

// 필터 페이지 GET
export async function getPostTag(tag) {
  try {
    const result = await axios.get(`http://localhost:5500/api/v1/posts/?tag=${tag}`);
    return result.data.posts;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

const postsAPI = {
  async getAllPosts() {
    return await api.get(API_URL);
  },

  async getPostById(postId) {
    return await api.get(API_URL + `/${postId}`);
  },

  async getAllPostsByMe() {
    return await api.get(API_URL + '/my-page');
  },

  async addOne(payload) {
    return await api.post(API_URL, payload);
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
