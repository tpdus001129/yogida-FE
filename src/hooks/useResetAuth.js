import { useResetRecoilState } from 'recoil';
import { userState } from '../recoils/userAtom';
import { useNavigate } from 'react-router';
import { PATH } from '../constants/path';
import toast from 'react-hot-toast';

export const useResetAuth = () => {
  const navigate = useNavigate();
  const resetAuthToken = useResetRecoilState(userState);

  return () => {
    toast.success('로그아웃 되었습니다.');

    //home화면으로 이동
    navigate(PATH.root);
    //recoil의 user정보 지우기
    //localhost의 user정보 지우기
    resetAuthToken();
  };
};
