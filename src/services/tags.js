import axios from 'axios';

// 전체 태그 데이터 가져오기
export async function getTags() {
  try {
    const res = await axios.get('mock/tags.json');
    return res.data.tags;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}
