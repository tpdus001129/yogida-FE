import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Notfound from './pages/Notfound';
import Layout from './components/commons/Layout';
import Mypage from './pages/mypage/Mypage';
import Search from './pages/Search';
import Filter from './pages/Filter';
import Login from './pages/Login';
import Schedule from './components/Mypage/Schedule';
import Signup from './pages/SignUp';
import FindPassword from './pages/FindPassword';
import CommentModal from './components/CommentModal/CommentModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="*" element={<Notfound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find-password" element={<FindPassword />} />

        <Route path="/comment-modal" element={<CommentModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
