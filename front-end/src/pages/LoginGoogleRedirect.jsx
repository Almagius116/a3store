import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginGoogleRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 300);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return <p>Mengalihkan ke akun Anda...</p>;
}
