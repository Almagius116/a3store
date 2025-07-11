import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import LinkButton from "./link/LinkButton";
import LinkIcon from "./link/LinkIcon";
import Button from "./buttons/Button";
import { useAuthCheck } from "../hooks/useAuthCheck";
import { useSelector } from "react-redux";

const Navbar = ({ profile }) => {
  const isAuthenticated = useAuthCheck();
  const user = useSelector((state) => state.user.user);

  if (isAuthenticated === null) return <p>Loading...</p>;

  return (
    <>
      <div className="w-screen py-2 px-[10%] shadow-md">
        <div className="w-full flex justify-between p-2 items-center">
          <div>Logo</div>
          <div className="flex rounded-lg bg-gray-100">
            <input
              type="text"
              placeholder="Search"
              className="w-full focus:outline-none rounded-l-lg bg-gray-100 px-4 py-2.5 text-gray-600"
            />
            <button className="hover:bg-gray-200 px-4 rounded-lg">
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
            </button>
          </div>
          <div className="flex gap-7 items-center">
            <LinkButton
              dest={"/"}
              className={
                "bg-white text-gray-500 shadow-none hover:bg-white hover:text-gray-700 p-1"
              }
            >
              Home
            </LinkButton>

            {isAuthenticated ? (
              <>
                <LinkIcon dest={"/cart"}>
                  <ShoppingBagIcon className="h-7 w-7" />
                </LinkIcon>

                <Button
                  onClick={profile}
                  className={
                    "w-12 h-12 rounded-2xl p-[1.5px] bg-green-300 hover:bg-green-700"
                  }
                >
                  <img
                    src={`${user.profilePic}`}
                    className="w-full h-full rounded-2xl"
                  ></img>
                </Button>
              </>
            ) : (
              <LinkButton dest={"/signin"}>SIGN IN</LinkButton>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
