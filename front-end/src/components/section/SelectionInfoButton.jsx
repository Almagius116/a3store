import {
  ArrowLeftEndOnRectangleIcon,
  BellIcon,
  ClockIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Button from "../buttons/Button";

const SelectionInfoButton = ({ onClickSelect }) => {
  return (
    <section className="bg-gray-200 w-full h-96 border border-gray-100 rounded-md grid shadow-md">
      <Button
        onClick={() => onClickSelect("Profile")}
        className={
          "bg-gray-100 text-gray-400 hover:bg-gray-200 rounded-t-sm rounded-b-none border-b border-gray-200"
        }
      >
        <div className="flex items-center gap-3 justify-center">
          <UserIcon className="w-4 h-4" />
          Profile
        </div>
      </Button>

      <Button
        onClick={() => onClickSelect("Notification")}
        className={
          "bg-gray-100 text-gray-400 hover:bg-gray-200 rounded-none border-b border-gray-200"
        }
      >
        <div className="flex items-center gap-3 justify-center">
          <BellIcon className="w-4 h-4" />
          Notification
        </div>
      </Button>

      <Button
        onClick={() => onClickSelect("History")}
        className={
          "bg-gray-100 text-gray-400 hover:bg-gray-200 rounded-none border-b border-gray-200"
        }
      >
        <div className="flex items-center gap-3 justify-center">
          <ClockIcon className="w-4 h-4" />
          History
        </div>
      </Button>

      <Button
        onClick={() => onClickSelect("Orders")}
        className={
          "bg-gray-100 text-gray-400 hover:bg-gray-200 rounded-none border-b border-gray-200"
        }
      >
        <div className="flex items-center gap-3 justify-center">
          <ShoppingBagIcon className="w-4 h-4" />
          Orders
        </div>
      </Button>
      <Button
        onClick={() => onClickSelect("Logout")}
        className={
          "bg-gray-100 text-gray-400 hover:bg-gray-200 rounded-b-sm rounded-t-none border-b border-gray-200"
        }
      >
        <div className="flex items-center gap-3 justify-center">
          <ArrowLeftEndOnRectangleIcon className="w-4 h-4" />
          Log Out
        </div>
      </Button>
    </section>
  );
};

export default SelectionInfoButton;
