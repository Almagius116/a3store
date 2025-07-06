import ValidationText from "../text/ValidationText";

const AuthInputText = ({ validation, ...props }) => {
  return (
    <>
      <input
        {...props}
        className={
          "bg-white/0 focus:outline-none border-b border-b-gray-500 w-52 text-zinc-600 text-sm text-start placeholder:text-start rounded-none px-1 pb-2.5 pt-1"
        }
      />
      <ValidationText>{validation}</ValidationText>
    </>
  );
};

export default AuthInputText;
