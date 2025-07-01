import { cn } from "../../lib/utils";

const InputCard = ({ children, className }) => {
  return (
    <>
      <div
        className={cn("bg-white h-72 w-72 rounded-2xl shadow-2xl", className)}
      >
        {children}
      </div>
    </>
  );
};

export default InputCard;
