import Button from "../components/buttons/Button";
import InputCard from "../components/cards/InputCard";
import LinkButton from "../components/link/LinkButton";
import { login } from "../features/auth/authService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthInputText from "../components/input/AuthInputText";
import img from "../assets/logo-bg-none.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const { email, password } = data;
      await login({ email, password });
      navigate("/");
    } catch (err) {
      console.log(err);
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
      <div className="bg-indigo-400 w-full h-full">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <InputCard className={"bg-white/45 grid h-96 py-13"}>
            <div className="grid gap-3">
              <div className="flex justify-center">
                <img className="w-16 h-16" src={img} />
              </div>
              <div className="flex flex-col items-center justify-center gap-3 ">
                <form onSubmit={handleSubmit((data) => handleLogin(data))}>
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
                  <div className="w-full flex justify-end">
                    <LinkButton
                      className={
                        "p-0 bg-white/0 hover:bg-white/0 hover:text-gray-700 active:text-white/25 text-gray-500 shadow-none font-extralight text-[12px] mt-2"
                      }
                    >
                      Forgot password?
                    </LinkButton>
                  </div>
                  <div className="text-[12px] flex items-center justify-end gap-[70px] mt-4">
                    <LinkButton
                      dest={"/signup"}
                      className={
                        "p-0 bg-white/0 hover:bg-white/0 hover:text-gray-800 active:text-white/25 text-gray-600 shadow-none font-medium text-[12px]"
                      }
                    >
                      SIGN UP
                    </LinkButton>
                    <Button type={"submit"} className={"pt-2 "}>
                      LOG IN
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </InputCard>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
