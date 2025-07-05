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

const OrderPage = () => {
  const { id } = useParams();
  const {
    data: order,
    loading,
    error,
  } = useFetch(useCallback(() => getOrderById(id), [id]));

  if (loading) return <p>Loading produk...</p>;
  if (error) return <p>Terjadi error: {error.message}</p>;

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
        <div className="w-[80%] h-[50%] bg-amber-200">
          <Button onClick={() => handlePayment(order)}>bayar</Button>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
