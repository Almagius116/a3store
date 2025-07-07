import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { registerUser } from "../features/auth/authService";
import img from "../assets/logo-bg-none.png";
import Modal from "../components/modal/Modal";
import Button from "../components/buttons/Button";
import InputCard from "../components/cards/InputCard";
import AuthInputText from "../components/input/AuthInputText";
import LinkButton from "../components/link/LinkButton";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    try {
      const { fullName, email, password } = data;
      const res = await registerUser({ fullName, email, password });
      setShowStatusModal(true);
      setStatus(res.data.status);
      setMessage("Registration successful.");
      setTimeout(() => {
        setShowStatusModal(false);
        navigate("/signin");
      }, 2000);
    } catch (err) {
      setShowStatusModal(true);
      setStatus(err.response.data.status);
      setMessage(err.response.data.message);
      setTimeout(() => {
        setShowStatusModal(false);
      }, 2000);
    }
  };

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <>
      <Modal isOpen={showStatusModal} message={message} type={status} />
      <div className="w-full h-full bg-indigo-400 flex">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <InputCard className={"h-[420px] bg-white/45"}>
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2">
              <img className="w-16 h-16" src={img} />
            </div>
            <div className="absolute top-1/2 -translate-y-[25%] left-1/2 -translate-x-1/2">
              <form onSubmit={handleSubmit((data) => handleRegister(data))}>
                <AuthInputText
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  placeholder={"Full Name"}
                  validation={errors.fullName?.message}
                />
                <AuthInputText
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: "Email is not valid",
                    },
                  })}
                  placeholder={"Email"}
                  validation={errors.email?.message}
                />
                <div className="relative">
                  <AuthInputText
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Min length is 8",
                      },
                    })}
                    placeholder={"Password"}
                    validation={errors.password?.message}
                  />
                  <div
                    onClick={handleShowPassword}
                    className="absolute top-2 right-0 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeIcon className="w-4 h-4 text-gray-500" />
                    ) : (
                      <EyeSlashIcon className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </div>
                <div className="flex text-[13px] justify-center gap-1 mt-1">
                  <p>Already have an account?</p>
                  <LinkButton
                    dest={"/signin"}
                    className={
                      "bg-white/0 shadow-none hover:bg-white/0 p-0 text-indigo-500 hover:text-indigo-700"
                    }
                  >
                    Sign In
                  </LinkButton>
                </div>
                <div className="flex justify-center mt-6 text-[12px]">
                  <Button type={"submit"} className={"py-2"}>
                    REGISTER
                  </Button>
                </div>
              </form>
            </div>
          </InputCard>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
