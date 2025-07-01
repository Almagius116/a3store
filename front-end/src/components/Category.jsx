import InputText from "./input/InputText";

const Category = () => {
  return (
    <>
      <div className="w-full p-[3%]">
        <div className="border border-gray-300 shadow-md h-14 rounded-4xl flex items-center justify-around">
          <div className="flex items-center gap-3">
            <p className="text-gray-400">Price</p>
            <div className="bg-gray-100 rounded-4xl">
              <InputText placeholder={"Min"} />
              -
              <InputText placeholder={"Max"} />
            </div>
          </div>
          <InputText />
        </div>
      </div>
    </>
  );
};

export default Category;
