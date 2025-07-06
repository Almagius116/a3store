import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getProductById } from "../features/products/productService";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/cart/cartSlice";
import Navbar from "../components/Navbar";
import Button from "../components/buttons/Button";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import ReviewsSection from "../components/section/ReviewsSection";
import { rupiahFormat } from "../utils/helper";

const DetailProductPage = () => {
  const { id } = useParams();
  const fetchProductById = useCallback(() => getProductById(id), [id]);
  const { data: product, loading, error } = useFetch(fetchProductById);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const [selected, setSelected] = useState("detail");

  if (counter < 1) {
    setCounter(1);
  }

  if (loading) return <p>Loading produk...</p>;
  if (error) return <p>Terjadi error: {error.message}</p>;
  return (
    <>
      <div className="w-full grid grid-cols-1">
        <Navbar />
        <section className="mt-20 w-full bg-gray-100 h-96 flex justify-center">
          <div className="w-[75%] max-w-[877px] flex gap-8 py-3.5">
            <div className="h-full bg-amber-200 w-[50%]  rounded-2xl">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src={product.images[0]}
              />
            </div>
            <div className="h-full w-1/3 max-w-[276px] flex flex-col gap-2.5 p-4">
              <p className="text-2xl font-bold">{product.name}</p>
              <div className="bg-gray-200 w-full h-[1px]"></div>
              <div className="py-4 flex flex-col gap-2.5">
                <p className="text-gray-500 font-semibold">
                  {rupiahFormat(product.price)}
                </p>
                <p className="text-gray-500 font-semibold">
                  Stock : {product.stock}
                </p>
                <div className="flex items-center gap-5">
                  <div className="h-full flex items-center bg-gray-200 rounded-md gap-1.5 text-gray-500">
                    <Button
                      className={
                        "px-1.5 bg-white/0 shadow-none hover:bg-gray-300"
                      }
                      onClick={() => setCounter(counter - 1)}
                    >
                      <MinusIcon className="h-4 w-4 text-gray-500" />
                    </Button>
                    <p>{counter}</p>
                    <Button
                      className={
                        "px-1.5 bg-white/0 shadow-none hover:bg-gray-300"
                      }
                      onClick={() => setCounter(counter + 1)}
                    >
                      <PlusIcon className="h-4 w-4 text-gray-500" />
                    </Button>
                  </div>
                  <Button
                    onClick={() =>
                      dispatch(
                        add({
                          id: product.id,
                          name: product.name,
                          qty: counter,
                          price: parseFloat(product.price),
                          totalPriceProduct:
                            parseFloat(product.price) * counter,
                        })
                      )
                    }
                    className={"text-xs"}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center">
          <div className="w-[75%] max-w-[877px] flex flex-col">
            <div>
              <Button
                onClick={() => setSelected("detail")}
                className={`w-[50%] rounded-none bg-white hover:bg-white py-1.5 border-b-2 ${
                  selected === "detail"
                    ? "border-gray-400 text-gray-500 active:text-gray-500"
                    : "border-gray-200 text-gray-400 active:text-gray-400"
                }`}
              >
                Details
              </Button>
              <Button
                onClick={() => setSelected("review")}
                className={`w-[50%] rounded-none bg-white hover:bg-white py-1.5 border-b-2 ${
                  selected === "review"
                    ? "border-gray-400 text-gray-500 active:text-gray-500"
                    : "border-gray-200 text-gray-400 active:text-gray-400"
                }`}
              >
                Ratings & Reviews
              </Button>
            </div>
            {selected === "review" ? (
              <ReviewsSection />
            ) : (
              <div className="w-full pb-32">
                <div className="w-full p-7 px-4 bg-gray-200 rounded-b-xl">
                  {product.description}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default DetailProductPage;
