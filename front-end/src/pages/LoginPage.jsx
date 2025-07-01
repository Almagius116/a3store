import { useState } from "react";
import Button from "../components/buttons/Button";
import InputCard from "../components/cards/InputCard";
import LinkButton from "../components/link/LinkButton";
import { login } from "../features/auth/authService";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              <input
                placeholder={"Email"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={
                  "bg-white/0 focus:outline-none border-b border-b-gray-500 w-52 text-zinc-600 text-sm text-start placeholder:text-start rounded-none px-1 py-2.5"
                }
              />
              <input
                placeholder={"Password"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={
                  "bg-white/0 focus:outline-none border-b border-b-gray-500 w-52 text-zinc-600 text-sm text-start placeholder:text-start rounded-none px-1 py-2.5"
                }
              />
              <div className="w-full flex justify-end text-[10px] ">
                <LinkButton
                  className={
                    "p-0 bg-white/0 hover:bg-white/0 hover:text-gray-700 active:text-white/25 text-gray-500 shadow-none mr-10 font-extralight "
                  }
                >
                  Forgot password ?
                </LinkButton>
              </div>
              <div className="text-[12px] flex items-center gap-[70px]">
                <LinkButton
                  dest={"/signup"}
                  className={
                    "p-0 bg-white/0 hover:bg-white/0 hover:text-gray-800 active:text-white/25 text-gray-600 shadow-none font-medium"
                  }
                >
                  SIGN UP
                </LinkButton>
                <Button onClick={handleLogin} className={"pt-2 "}>
                  LOG IN
                </Button>
              </div>
            </div>
          </InputCard>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
