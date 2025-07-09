import { Navigate } from "react-router-dom";
import { useAuthCheck } from "../hooks/useAuthCheck";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
  const isAuthenticated = useAuthCheck();
  const user = useSelector((state) => state.user.user);

  if (isAuthenticated === null) return <p>Loading...</p>;

  console.log(user);

  return isAuthenticated && user.role === "admin" ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoute;
