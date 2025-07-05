import Button from "../components/buttons/Button";
import InputCard from "../components/cards/InputCard";
import AuthInputText from "../components/input/AuthInputText";
import LinkButton from "../components/link/LinkButton";
import { registerUser } from "../features/auth/authService";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    try {
      const { fullName, email, password } = data;
      const res = await registerUser({ fullName, email, password });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-full bg-indigo-400 flex">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <InputCard className={"h-[420px] bg-white/45"}>
            <div className="absolute top-1/2 -translate-y-[25%] left-1/2 -translate-x-1/2">
              <form onSubmit={handleSubmit((data) => handleRegister(data))}>
                <AuthInputText
                  {...register("fullName", { required: "This is required" })}
                  placeholder={"Full Name"}
                  validation={errors.fullName?.message}
                />
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
