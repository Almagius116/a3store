import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { getOrderById } from "../features/order/orderService";
import { useFetch } from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import OrderItemsSection from "../components/section/OrderItemsSection";
import FormShippingSection from "../components/section/FormShippingSection";
import { capitalizeFirstLetter } from "../utils/helper";

const OrderPage = () => {
  const { id } = useParams();
  const {
    data: order,
    loading,
    error,
    refetch,
  } = useFetch(useCallback(() => getOrderById(id), [id]));

  if (loading) return <p>Loading produk...</p>;
  if (error) return <p>Terjadi error: {error.message}</p>;

  console.log(order);

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex justify-center">
        <div className="w-[80%] bg-gray-50 mt-6 shadow-md rounded-xl p-10 lg:px-20">
          <div className="w-full h-full flex flex-col gap-10">
            <div className="flex justify-center text-2xl font-bold text-gray-500 gap-4">
              ORDER-{order.id}
              <span className="font-medium text-green-500">
                {capitalizeFirstLetter(order.status)}
              </span>
            </div>
            <div className="grid gap-32">
              <OrderItemsSection order={order} refetch={refetch} />
              <FormShippingSection order={order} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
