import axios from 'axios';

// 전체 포스트 데이터 가져오기(목데이터)
export async function getPosts() {
  try {
    const res = await axios.get('mock/posts.json');
    return res.data.posts;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

// 메인페이지 데이터 가져오기
export async function getPostsAllList() {
  try {
    const res = await axios.get('http://localhost:5500/api/v1/posts');
    return res.data.posts;
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
