import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { add, resetInfo } from "../features/info/infoSlice";
import Navbar from "../components/Navbar";
import OrdersSection from "../components/section/OrdersSection";
import ProfileSection from "../components/section/ProfileSection";
import SelectionInfoButton from "../components/section/SelectionInfoButton";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authService";
import { resetUser } from "../features/auth/authSlice";
import { resetCart } from "../features/cart/cartSlice";
import ConfirmationModal from "../components/modal/ConfirmationModal";

const ProfilePage = () => {
  const info = useSelector((state) => state.info.info);
  const [selectedOption, setSelectedOption] = useState(info.selectedInfo);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (option) => {
    if (option === "Logout") {
      setShowConfirmationModal(true);
    } else {
      setSelectedOption(option);
    }
  };

  const handleLogout = async () => {
    await logout();
    dispatch(resetUser());
    dispatch(resetInfo());
    dispatch(resetCart());
    navigate("/signin");
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  useEffect(() => {
    if (selectedOption !== null) {
      dispatch(
        add({
          selectedInfo: selectedOption,
        })
      );
    }
  }, [selectedOption]);

  return (
    <>
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={closeConfirmationModal}
        onConfirm={handleLogout}
        message={"Apakah anda yakin ingin logout?"}
        btnMsg={"Logout"}
      />
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] bg-black/5 p-10 pb-16 rounded-md mt-10 ">
          <div className="flex w-full gap-5">
            <div className="w-[35%]">
              <SelectionInfoButton onClickSelect={handleSelect} />
            </div>
            <div className="w-[65%]">
              {selectedOption === "Profile" ? (
                <ProfileSection />
              ) : selectedOption === "Orders" ? (
                <OrdersSection />
              ) : (
                <ProfileSection />
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-900 h-72 w-full "></div>
      </div>
    </>
  );
};

export default ProfilePage;
