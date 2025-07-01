import { cn } from "../../lib/utils";
import { useNavigate } from "react-router-dom";

const LinkIcon = ({ children, classname, dest }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(dest)}
        className={cn(
          `bg-blue-200 hover:bg-blue-400 transition duration-500 text-gray-500 hover:text-white p-2 rounded-4xl cursor-pointer`,
          classname
        )}
      >
        {children}
      </button>
    </>
  );
};

export default LinkIcon;
