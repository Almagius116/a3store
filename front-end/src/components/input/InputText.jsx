import { cn } from "../../lib/utils";

const InputText = ({ placeholder, className, onChange }) => {
  return (
    <>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "w-40 focus:outline-none rounded-4xl bg-gray-100 px-4 py-2.5 text-gray-600 placeholder:text-center text-center",
          className
        )}
      />
    </>
  );
};

export default InputText;
