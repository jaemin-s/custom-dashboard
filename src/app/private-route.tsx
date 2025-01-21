import { Navigate } from "react-router";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthenicated = true;

  if (!isAuthenicated) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

export default PrivateRoute;
