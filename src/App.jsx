import { Routes, Route } from 'react-router-dom';
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
import Detail from './pages/Detail';
import ChangePassword from './pages/ChangePassword';
import Notification from './pages/Notification';
import Map from './pages/Map';
import Setup from './pages/setup/Setup';

import { PATH } from './constants/path';
import { useAuth } from './hooks/useAuth';
import { useSetRecoilState } from 'recoil';
import { userState } from './recoils/userAtom';
import { useEffect } from 'react';

function App() {
  // 로그인이 필요한 페이지인지 check
  // 해당 페이지일 경우 로그인 한 유저 정보 가져오기
  const { loginUserInfo } = useAuth();
  const setUser = useSetRecoilState(userState);

  // 로그인 유저정보 recoil에 저장
  useEffect(() => {
    if (loginUserInfo) {
      setUser(loginUserInfo);
    }
  }, [loginUserInfo, setUser]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={PATH.root} element={<Main />} />
        <Route path={PATH.mypage} element={<Mypage />} />
        <Route path={PATH.notification} element={<Notification />} />
        <Route path={PATH.post} element={<Detail />} />
      </Route>
      <Route path={PATH.notfound} element={<Notfound />} />
      <Route path={PATH.login} element={<Login />} />
      <Route path={PATH.search} element={<Search />} />
      <Route path={PATH.filter} element={<Filter />} />
      <Route path={PATH.schedule} element={<Schedule />} />
      <Route path={PATH.signup} element={<Signup />} />
      <Route path={PATH.findPassword} element={<FindPassword />} />
      <Route path={PATH.detail} element={<Detail />} />
      <Route path={PATH.changePassword} element={<ChangePassword />} />
      <Route path={PATH.commentModal} element={<CommentModal />} />
      <Route path={PATH.map} element={<Map />} />
      <Route path={PATH.setup} element={<Setup />} />
    </Routes>
  );
}

export default App;
