import Card from "../components/cards/Card";
import Category from "../components/Category";
import Navbar from "../components/Navbar";
import { getAllProducts } from "../features/products/productService";
import { useFetch } from "../hooks/useFetch";
import Carousel from "../components/carousel/carousel";
import img from "../assets/contoh1.jpg";
import { useEffect, useState } from "react";
import SelectionButtonModal from "../components/modal/SelectionButtonModal";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { data: products, loading, error } = useFetch(getAllProducts);
  const [profileMenuModal, setProfileMenuModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (selectedOption === "Profile") {
      navigate("/profile");
    }
  }, [selectedOption]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Terjadi Error: {error.message}</p>;

  const images = [img, img, img];

  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <Navbar userInfo={() => setProfileMenuModal(true)} />
        <SelectionButtonModal
          isOpen={profileMenuModal}
          onClose={() => setProfileMenuModal(false)}
          options={["Profile", "Notification", "History", "Orders", "Logout"]}
          onSelect={handleSelect}
        />
        <Carousel images={images} />
        <Category />
        <div className="flex justify-center gap-7">
          <div className="w-96 h-96 grid grid-cols-1 gap-2">
            <div className="bg-gray-50 rounded-md shadow-md"></div>
            <div className="bg-gray-50 rounded-md shadow-md"></div>
            <div className="bg-gray-50 rounded-md shadow-md"></div>
            <div className="bg-gray-50 rounded-md shadow-md"></div>
            <div className="bg-gray-50 rounded-md shadow-md"></div>
            <div className="bg-gray-50 rounded-md shadow-md"></div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
