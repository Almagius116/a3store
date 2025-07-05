import Button from "./buttons/Button";
import InputTextCategory from "./input/InputTextCategory";
import { useForm } from "react-hook-form";

const Category = ({ setFilter, category }) => {
  const { register, handleSubmit } = useForm();

  const handleSearch = async (data) => {
    try {
      const { minPrice, maxPrice } = data;
      setFilter(minPrice, maxPrice, category);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full p-[3%]">
        <form onSubmit={handleSubmit((data) => handleSearch(data))}>
          <div className="border border-gray-300 shadow-md h-14 rounded-4xl flex items-center py-8">
            <div className="flex items-center justify-center gap-7 w-full">
              <p className="text-gray-400">Price</p>
              <div className="bg-gray-100 rounded-4xl flex items-center">
                <InputTextCategory {...register("minPrice")} />
                <p>-</p>
                <InputTextCategory {...register("maxPrice")} />
              </div>
              <Button type={"submit"} className={"rounded-3xl w-[15%]"}>
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Category;
