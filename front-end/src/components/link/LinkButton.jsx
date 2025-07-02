import { cn } from "../../lib/utils";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ children, dest, className }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(dest)}
      className={cn(
        `text-white rounded-md bg-indigo-600 px-5 py-2.5 text-sm shadow-xs hover:bg-indigo-300 active:text-white transition duration-500 font-medium`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default LinkButton;
