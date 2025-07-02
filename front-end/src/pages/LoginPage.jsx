import Button from "../components/buttons/Button";
import InputCard from "../components/cards/InputCard";
import LinkButton from "../components/link/LinkButton";
import { login } from "../features/auth/authService";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthInputText from "../components/input/AuthInputText";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login({ email, password });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-indigo-400 w-screen h-screen">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <InputCard className={"bg-white/45 grid gap-1.5 h-96"}>
            <div className=""></div>
            <div className="flex flex-col items-center justify-center gap-3 ">
              <form onSubmit={handleSubmit((data) => handleLogin(data))}>
                <AuthInputText
                  {...register("email", {
                    required: "This is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: "Email is not valid",
                    },
                  })}
                  placeholder={"Email"}
                  validation={errors.email?.message}
                />
                <AuthInputText
                  {...register("password", {
                    required: "This is required",
                    minLength: {
                      value: 8,
                      message: "Min length is 8",
                    },
                  })}
                  placeholder={"Password"}
                  validation={errors.password?.message}
                />
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
          </InputCard>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
