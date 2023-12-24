import { HttpStatusCode } from 'axios';
import PropTypes from 'prop-types';
import Login from './Login';
export default function ApiErrorBoundary({ error }) {
  //   if(클라이언트 에러) return ...
  //   if(서버 에러) return ...

  //토큰 에러
  if (error.status === HttpStatusCode.Unauthorized) {
    return <Login />;
  }

  return (
    <div className="bg-white w-full h-screen flex items-center justify-center">
      <span>잠시 후 다시 시도해주세요.</span>
    </div>
  );
}

ApiErrorBoundary.propTypes = {
  error: PropTypes.any,
  resetErrorBoundary: PropTypes.any,
};
