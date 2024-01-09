import { HttpStatusCode } from 'axios';
import PropTypes from 'prop-types';

export default function ApiErrorBoundary({ error }) {
  if (error?.status === HttpStatusCode.Unauthorized) window.location.href = '/login';

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
