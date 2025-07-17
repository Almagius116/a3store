import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../utils/axiosInstance";
import { useForm } from "react-hook-form";
import InputCard from "../components/cards/InputCard";
import Button from "../components/buttons/Button";

export default function VerifyOtpPage() {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const email = query.get("email");

  const googleId = query.get("googleId");
  const fullName = query.get("fullName");
  const profilePicture = query.get("profilePicture");

  const handleOTP = async (data) => {
    const otp =
      data.digit1 +
      data.digit2 +
      data.digit3 +
      data.digit4 +
      data.digit5 +
      data.digit6;

    try {
      const res = await axios.post("/users/google/verify-otp", {
        email,
        otp,
        googleId,
        fullName,
        profilePicture,
      });

      alert("Login berhasil!");
      navigate("/");
    } catch (err) {
      alert("OTP salah atau sudah kedaluwarsa");
    }
  };

  return (
    <div className="w-full h-full bg-indigo-400 flex justify-center items-center">
      <InputCard className={"p-6 h-auto w-96 rounded-4xl"}>
        <form onSubmit={handleSubmit(handleOTP)}>
          <h2 className="text-center font-medium text-2xl">Masukkan OTP</h2>
          <p className="text-xs mt-5 text-center">
            OTP telah dikirim ke email {email}
          </p>
          <div className="flex justify-center gap-2 mt-5">
            <input
              {...register("digit1")}
              className="w-11 h-11 bg-gray-100 rounded-xl text-center"
            />

            <input
              {...register("digit2")}
              className="w-11 h-11 bg-gray-100 rounded-xl text-center"
            />
            <input
              {...register("digit3")}
              className="w-11 h-11 bg-gray-100 rounded-xl text-center"
            />
            <input
              {...register("digit4")}
              className="w-11 h-11 bg-gray-100 rounded-xl text-center"
            />
            <input
              {...register("digit5")}
              className="w-11 h-11 bg-gray-100 rounded-xl text-center"
            />
            <input
              {...register("digit6")}
              className="w-11 h-11 bg-gray-100 rounded-xl text-center"
            />
          </div>
          <div className="mt-5 flex justify-center mb-5">
            <Button>Verifikasi</Button>
          </div>
        </form>
      </InputCard>
    </div>
  );
}
