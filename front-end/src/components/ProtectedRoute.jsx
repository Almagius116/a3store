import { Navigate } from "react-router-dom";
import { useAuthCheck } from "../hooks/useAuthCheck";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthCheck();

  console.log("isAut isinya : ", isAuthenticated);

  if (isAuthenticated === null) return <p>Loading...</p>;

  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
