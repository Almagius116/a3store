import { useState } from "react";
import NavigationButtons from "../../components/section/admin/NavigationButtons";
import OrdersData from "../../components/section/admin/OrdersData";

const AdminPage = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  const handleSelect = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="w-full flex">
      <section className="fixed w-[30%] h-full">
        <NavigationButtons
          selectedSection={selectedSection}
          handleSelect={handleSelect}
        />
      </section>
      <section className="absolute right-0 w-[70%] bg-gray-100 border-1 border-gray-200 rounded-2xl m-2 pt-4 pb-3 px-3 shadow-md">
        {selectedSection === "Orders" ? <OrdersData /> : ""}
      </section>
    </div>
  );
};

export default AdminPage;
