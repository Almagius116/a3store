import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCallback } from "react";
import { getOrderById } from "../features/order/orderService";
import { useFetch } from "../hooks/useFetch";
import {
  midtransPayment,
  createPayment,
} from "../features/payment/paymentService";
import Button from "../components/buttons/Button";
import OrderItemsSection from "../components/section/OrderItemsSection";
import FormShippingSection from "../components/section/FormShippingSection";

const OrderPage = () => {
  const { id } = useParams();
  const {
    data: order,
    loading,
    error,
  } = useFetch(useCallback(() => getOrderById(id), [id]));

  if (loading) return <p>Loading produk...</p>;
  if (error) return <p>Terjadi error: {error.message}</p>;

  console.log(order);

  const handlePayment = async (order) => {
    try {
      const res = await midtransPayment({
        orderId: order.id,
        amount: parseInt(order.totalPrice),
        customerName: order.user.fullName,
        customerEmail: order.user.email,
      });

      const token = res.data.data.paymentToken;

      window.snap.pay(token, {
        onSuccess: (result) => {
          createPayment({ token, result });
          alert("Pembayaran berhasil!");
        },
        onPending: (result) => {
          createPayment({ token, result });
          alert("Menunggu pembayaran...");
        },
        onError: (result) => {
          createPayment({ token, result });
          alert("Gagal membayar");
        },
        onClose: () => {
          alert("Popup ditutup tanpa menyelesaikan pembayaran");
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-full flex justify-center">
        <div className="w-[80%] bg-gray-50 mt-6 shadow-md rounded-xl p-10 lg:px-20">
          <div className="w-full h-full flex flex-col gap-10">
            <div className="flex justify-center text-2xl font-bold text-gray-500">
              ORDER-{order.id}
            </div>
            <div className="grid gap-32">
              <OrderItemsSection order={order} />
              <FormShippingSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
