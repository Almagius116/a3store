import Category from "../components/Category";
import Navbar from "../components/Navbar";
import Carousel from "../components/carousel/carousel";
import img from "../assets/contoh1.jpg";
import { useCallback, useEffect, useState } from "react";
import SelectionButtonModal from "../components/modal/SelectionButtonModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/info/infoSlice";
import CheckBoxInput from "../components/input/CheckBoxInput";
import PaginationSection from "../components/section/PaginationSection";
import { getAllCategory } from "../features/categories/categoriesService";
import { useFetch } from "../hooks/useFetch";
import Button from "../components/buttons/Button";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getCategories = useCallback(() => getAllCategory(), []);
  const { data, loading, error } = useFetch(getCategories);
  const user = useSelector((state) => state.user.user);

  const [selectedCategories, setSelectedCategories] = useState(0);
  const [profileMenuModal, setProfileMenuModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    if (selectedOption !== null) {
      dispatch(
        add({
          selectedInfo: selectedOption,
        })
      );
    }
  }, [selectedOption]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    navigate(`/user/${user.id}`);
  };

  const handleSearch = (minPrice, maxPrice, category) => {
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setCategory(category);
  };

  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(0);
    setSelectedCategories(0);
  };

  const images = [img, img, img];

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Terjadi Error: {error.message}</p>;

  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar userInfo={() => setProfileMenuModal(true)} />
        <SelectionButtonModal
          isOpen={profileMenuModal}
          onClose={() => setProfileMenuModal(false)}
          options={["Profile", "Notification", "History", "Orders", "Logout"]}
          onSelect={handleSelect}
        />
        <Carousel images={images} />
        <Category setFilter={handleSearch} category={selectedCategories} />
        <div className="flex justify-center gap-7">
          <div className="max-h-96 shadow-md bg-indigo-100 rounded-2xl grid p-2.5">
            <div className="w-full flex flex-col items-center max-h-28 rounded-xl gap-6">
              <p className="font-medium">Categories</p>
              <div className=" grid grid-cols-3 gap-1">
                {Array.isArray(data.categories) &&
                  data.categories.map((category) => (
                    <div key={category.name}>
                      <CheckBoxInput
                        label={category.name}
                        value={category.id}
                        checked={category.id == selectedCategories}
                        onChange={(e) => setSelectedCategories(e.target.value)}
                      />
                    </div>
                  ))}
              </div>
              <Button className={"rounded-xl px-8"} onClick={handleClear}>
                Clear
              </Button>
            </div>
          </div>
          <PaginationSection
            minPrice={minPrice}
            maxPrice={maxPrice}
            category={category}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
