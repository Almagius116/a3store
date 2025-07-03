import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDecodedToken } from "../features/auth/authService";
import { add } from "../features/auth/authSlice";
import { resetUser } from "../features/auth/authSlice";
import { resetInfo } from "../features/info/infoSlice";
import { resetCart } from "../features/cart/cartSlice";

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
        dispatch(resetUser());
        dispatch(resetInfo());
        dispatch(resetCart());
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [dispatch]);
  return isAuthenticated;
};
