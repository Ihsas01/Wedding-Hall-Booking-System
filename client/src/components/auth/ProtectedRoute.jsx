import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // TODO: Replace with actual auth check
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute; 