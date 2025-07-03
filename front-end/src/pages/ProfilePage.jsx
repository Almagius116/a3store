import Navbar from "../components/Navbar";
import OrdersSection from "../components/section/OrdersSection";
import ProfileSection from "../components/section/ProfileSection";
import SelectionInfoButton from "../components/section/SelectionInfoButton";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] bg-black/5 p-10 pb-16 rounded-md mt-10 ">
          <div className="flex w-full gap-5">
            <div className="w-[35%]">
              <SelectionInfoButton />
            </div>
            <div className="w-[65%]">
              {/* <ProfileSection /> */}
              <OrdersSection />
            </div>
          </div>
        </div>
        <div className="mt-10 bg-gray-900 h-72 w-full "></div>
      </div>
    </>
  );
};

export default ProfilePage;
