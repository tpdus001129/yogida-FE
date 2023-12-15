import axios from 'axios';

// 전체 포스트 데이터 가져오기
export async function getPosts() {
  try {
    // const res = await fetch('mock/posts.json');
    // const data = await res.json();
    // return data.posts;
    const res = await axios.get('mock/posts.json');
    return res.data.posts;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}
