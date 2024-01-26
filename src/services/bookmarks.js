import api from '.';

const API_URL = '/api/v1/bookmarks';

const bookmarkAPI = {
  async getAllBookmarksByMe() {
    const { data } = await api.get(API_URL);
    return data;
  },
  async postBookmarkByMe(singleScheduleId, postId) {
    return await api.post(API_URL, { singleScheduleId, postId });
  },
  async removeAll(singleScheduleIds) {
    return await api.patch(API_URL, { singleScheduleIds });
  },
};

export default bookmarkAPI;
