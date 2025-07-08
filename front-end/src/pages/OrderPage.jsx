import { useParams } from "react-router-dom";
import { useCallback } from "react";
import { getOrderById } from "../features/order/orderService";
import { useFetch } from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import OrderItemsSection from "../components/section/OrderItemsSection";
import FormShippingSection from "../components/section/FormShippingSection";
import { capitalizeFirstLetter } from "../utils/helper";
import ShippingDataSection from "../components/section/ShippingDataSection";
import { getShippingByOrderId } from "../features/shipping/shippingService";

const OrderPage = () => {
  const { id } = useParams();
  const {
    data: order,
    loading: orderLoading,
    error: orderError,
    refetch,
  } = useFetch(useCallback(() => getOrderById(id), [id]));

  const {
    data: shipping,
    loading: shippingLoading,
    error: shippingError,
  } = useFetch(useCallback(() => getShippingByOrderId({ orderId: id }), [id]));

  if (orderLoading) return <p>Loading produk...</p>;
  if (orderError) return <p>Terjadi error: {orderError.message}</p>;
  if (shippingLoading) return <p>Loading produk...</p>;
  if (shippingError) return <p>Terjadi error: {shippingError.message}</p>;

  console.log(shipping.shipping.length);
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex justify-center">
        <div className="w-[80%] bg-gray-50 mt-6 shadow-md rounded-xl p-10 lg:px-20">
          <div className="w-full h-full flex flex-col gap-10">
            <div className="flex justify-center text-2xl font-bold text-gray-500 gap-4">
              ORDER-{order.id}
              <span
                className={`font-medium ${
                  order.status === "canceled"
                    ? "text-red-400 "
                    : order.status === "pending"
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                {capitalizeFirstLetter(order.status)}
              </span>
            </div>
            <div className="grid gap-32">
              <OrderItemsSection order={order} refetch={refetch} />
              {shipping.shipping.length > 0 ? (
                <ShippingDataSection data={shipping} />
              ) : (
                <FormShippingSection order={order} refetch={refetch} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
