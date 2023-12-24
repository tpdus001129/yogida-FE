import api from '.';

const API_URL = '/api/v1/bookmarks';

const bookmarkAPI = {
  async getAllBookmarksByMe() {
    return await api.get(API_URL);
  },
  async removeAll(bookmarkId) {
    return await api.patch(API_URL, { bookmarkId });
  },
};

export default bookmarkAPI;
