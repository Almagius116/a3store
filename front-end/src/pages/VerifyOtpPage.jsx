import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../utils/axiosInstance";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");

  const googleId = query.get("googleId");
  const fullName = query.get("fullName");
  const profilePicture = query.get("profilePicture");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/users/google/verify-otp", {
        email,
        otp,
        googleId,
        fullName,
        profilePicture,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login berhasil!");
      navigate("/");
    } catch (err) {
      alert("OTP salah atau sudah kedaluwarsa");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Masukkan OTP</h2>
      <p>OTP telah dikirim ke email: {email}</p>
      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Kode OTP"
      />
      <button type="submit">Verifikasi</button>
    </form>
  );
}
