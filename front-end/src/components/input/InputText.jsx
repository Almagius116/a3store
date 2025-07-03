import { cn } from "../../lib/utils";
import ValidationText from "../text/ValidationText";

const InputText = ({ className, validation, ...props }) => {
  return (
    <>
      <input
        {...props}
        className={cn(
          "w-40 focus:outline-none rounded-xl bg-gray-100 px-5 py-3 text-gray-600 placeholder:text-start text-start text-sm",
          className
        )}
      />
      <ValidationText>{validation}</ValidationText>
    </>
  );
};

export default InputText;
