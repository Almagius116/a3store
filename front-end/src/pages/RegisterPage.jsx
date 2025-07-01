import { useState } from "react";
import Button from "../components/buttons/Button";
import InputCard from "../components/cards/InputCard";
import InputText from "../components/input/InputText";
import LinkButton from "../components/link/LinkButton";
import { register } from "../features/auth/authService";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      if (!fullName || !email || !password) {
        return console.log("Full Name, Email, and Password must be fill");
      }
      await register({ fullName, email, password });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-screen h-screen bg-indigo-400 flex">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <InputCard className={"h-[420px] bg-white/45"}>
            <div className="absolute top-1/2 -translate-y-[25%] left-1/2 -translate-x-1/2">
              <input
                placeholder={"Full Name"}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={
                  "bg-white/0 focus:outline-none border-b border-b-gray-500 w-52 text-zinc-600 text-sm text-start placeholder:text-start rounded-none px-1 pb-2.5 pt-3.5"
                }
              />
              <input
                placeholder={"Email"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={
                  "bg-white/0 focus:outline-none border-b border-b-gray-500 w-52 text-zinc-600 text-sm text-start placeholder:text-start rounded-none px-1 pb-2.5 pt-3.5"
                }
              />
              <input
                placeholder={"Password"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={
                  "bg-white/0 focus:outline-none border-b border-b-gray-500 w-52 text-zinc-600 text-sm text-start placeholder:text-start rounded-none px-1 pb-2.5 pt-3.5"
                }
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
                <Button onClick={handleRegister} className={"py-2"}>
                  REGISTER
                </Button>
              </div>
            </div>
          </InputCard>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
