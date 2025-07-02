import { cn } from "../../lib/utils";

const Button = ({ children, className, isDisabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={cn(
        `text-white text-sm rounded-md bg-indigo-500  px-5 py-2.5 shadow-xs active:text-white transition duration-500 font-medium cursor-pointer ${
          isDisabled
            ? "opacity-50 cursor-not-allowed hover:bg-none"
            : "hover:bg-indigo-700"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
