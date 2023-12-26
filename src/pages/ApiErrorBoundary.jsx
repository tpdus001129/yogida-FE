import PropTypes from 'prop-types';
import Login from './Login';
import { HttpStatusCode } from 'axios';

export default function ApiErrorBoundary({ error }) {
  //   if(클라이언트 에러) return ...
  //   if(서버 에러) return ...

  //토큰 에러
  if (error === HttpStatusCode.Unauthorized) {
    location.href = '/login';
    return <Login />;
  }

  return (
    <div className="bg-white w-full h-screen flex items-center justify-center">
      <span>잠시 후 다시 시도해주세요.</span>
      <span>{error?.message}</span>
    </div>
  );
}

ApiErrorBoundary.propTypes = {
  error: PropTypes.any,
  resetErrorBoundary: PropTypes.any,
};
