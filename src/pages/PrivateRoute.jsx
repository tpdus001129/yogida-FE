import { Navigate, Outlet } from 'react-router-dom';
import { useCheckLoginQuery } from './auth/queries';

export default function PrivateRoute() {
  const { data, isError } = useCheckLoginQuery();

  if (isError) return <Navigate to="/login" />;
  if (data) return <Outlet />;
}
