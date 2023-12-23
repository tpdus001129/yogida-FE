import axios from 'axios';

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

// import api from '.';

// const postAPI = {
//   async getPostsAllList() {
//     const res = await api.get('/api/v1/posts');
//     return res.data;
//   },
// };

// export default postAPI;
