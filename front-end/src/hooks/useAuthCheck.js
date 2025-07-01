import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDecodedToken } from "../features/auth/authService";
import { add } from "../features/auth/authSlice";

export const useAuthCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const decodedToken = await getDecodedToken();
        const user = decodedToken.data.data.user;

        dispatch(
          add({
            id: user.id,
            role: user.role,
            profilePic: user.profilePic,
            iat: user.iat,
            exp: user.exp,
          })
        );
        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [dispatch]);
  return isAuthenticated;
};
