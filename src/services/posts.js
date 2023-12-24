import axios from 'axios';

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

// api.get(`products/?page=${page}&search=${data}`)}

// import api from '.';

// const postAPI = {
//   async getPostsAllList() {
//     const res = await api.get('/api/v1/posts');
//     return res.data;
//   },
// };

// export default postAPI;
