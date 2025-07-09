import {
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  CubeIcon,
  UsersIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import logo from "../../../assets/logo-bg-none.png";
import Button from "../../buttons/Button";

const NavigationButtons = ({ selectedSection, handleSelect }) => {
  return (
    <>
      <div className="flex justify-center mt-7">
        <img src={logo} className="w-28" />
      </div>
      <div className="px-5 lg:px-16 mt-7">
        <Button
          onClick={() => handleSelect("Dashboard")}
          className={`w-full ${
            selectedSection === "Dashboard"
              ? "bg-indigo-600"
              : "bg-gray-100 text-gray-600 shadow-none hover:bg-indigo-400 hover:text-white"
          }`}
        >
          <div className="flex justify-start items-center gap-5">
            <ChartBarSquareIcon className="w-6 h-6" />
            Dashboard
          </div>
        </Button>
        <Button
          onClick={() => handleSelect("Products")}
          className={`w-full mt-3 ${
            selectedSection === "Products"
              ? "bg-indigo-600"
              : "bg-gray-100 text-gray-600 shadow-none hover:bg-indigo-400 hover:text-white"
          }`}
        >
          <div className="flex justify-start items-center gap-5">
            <CubeIcon className="w-6 h-6" />
            Products
          </div>
        </Button>
        <Button
          onClick={() => handleSelect("Orders")}
          className={`w-full mt-3 ${
            selectedSection === "Orders"
              ? "bg-indigo-600"
              : "bg-gray-100 text-gray-600 shadow-none hover:bg-indigo-400 hover:text-white"
          }`}
        >
          <div className="flex justify-start items-center gap-5">
            <ClipboardDocumentListIcon className="w-6 h-6" />
            Orders
          </div>
        </Button>
        <Button
          onClick={() => handleSelect("Payments")}
          className={`w-full mt-3 ${
            selectedSection === "Payments"
              ? "bg-indigo-600"
              : "bg-gray-100 text-gray-600  shadow-none hover:bg-indigo-400 hover:text-white"
          }`}
        >
          <div className="flex justify-start items-center gap-5">
            <CreditCardIcon className="w-6 h-6" />
            Payments
          </div>
        </Button>
        <Button
          onClick={() => handleSelect("Users")}
          className={`w-full mt-3 ${
            selectedSection === "Users"
              ? "bg-indigo-600"
              : "bg-gray-100 text-gray-600 shadow-none hover:bg-indigo-400 hover:text-white"
          }`}
        >
          <div className="flex justify-start items-center gap-5">
            <UsersIcon className="w-6 h-6" />
            Users
          </div>
        </Button>
        <Button
          onClick={() => handleSelect("Notifications")}
          className={`w-full mt-3 ${
            selectedSection === "Notifications"
              ? "bg-indigo-600"
              : "bg-gray-100 text-gray-600 shadow-none hover:bg-indigo-400 hover:text-white"
          }`}
        >
          <div className="flex justify-start items-center gap-5">
            <BellIcon className="w-6 h-6" />
            Notifications
          </div>
        </Button>
        <Button
          onClick={() => handleSelect("Settings")}
          className={`w-full mt-3 ${
            selectedSection === "Settings"
              ? "bg-indigo-600"
              : "bg-gray-100 text-gray-600 shadow-none hover:bg-indigo-400 hover:text-white"
          }`}
        >
          <div className="flex justify-start items-center gap-5">
            <Cog6ToothIcon className="w-6 h-6" />
            Settings
          </div>
        </Button>
      </div>
    </>
  );
};

export default NavigationButtons;
