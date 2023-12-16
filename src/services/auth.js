import api from '.';

const authAPI = {
  async login({ email, password }) {
    const res = await api.post('/api/user/login', { email, password });
    return res.data;
  },

  async logout() {
    return await api.get('/logout');
  },
};

export default authAPI;
