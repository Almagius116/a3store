import { useEffect, useState } from "react";
import { capitalizeFirstLetter, rupiahFormat } from "../../utils/helper";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import {
  midtransPayment,
  createPayment,
} from "../../features/payment/paymentService";
import { updateOrder } from "../../features/order/orderService";

const ShippingDataSection = ({ data, payment, order, refetch }) => {
  const navigate = useNavigate();
  const [nextPayButton, setNextPayButton] = useState(false);
  const [payButton, setPayButton] = useState(false);

  useEffect(() => {
    const paymentStatus = payment?.data?.data?.payment?.[0]?.status;
    const orderStatus = order?.status;

    setNextPayButton(paymentStatus === "pending");
    setPayButton(orderStatus === "pending");
  }, [payment, order]);

  const handlePayment = async () => {
    try {
      const res = await midtransPayment({
        orderId: order.id,
        amount:
          parseInt(order.totalPrice) + parseInt(data.shipping[0].shippingCost),
        customerName: order.user.fullName,
        customerEmail: order.user.email,
      });

      const token = res.data.data.paymentToken;

      window.snap.pay(token, {
        onSuccess: (result) => {
          createPayment({ token, result });
          updateOrder(order.id, { status: "paid" });
          alert("Pembayaran berhasil!");
          refetch();
        },
        onPending: (result) => {
          createPayment({ token, result });
          alert("Menunggu pembayaran...");
          navigate(0);
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

  const handleResumePayment = async () => {
    const token = payment?.data?.data?.payment[0]?.paymentToken;
    window.snap.pay(token, {
      onSuccess: () => {
        alert("Pembayaran berhasil!");
        navigate(0);
      },
      onClose: () => {
        alert("Pembayaran berhasil.");
      },
    });
  };

  return (
    <div className="text-gray-600">
      <p className="text-2xl font-medium">Data Pengiriman</p>
      <table className="min-w-full text-Start text-sm font-light mt-10">
        <tbody>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%] border-t-2">
              Nama Penerima
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap border-t-2">
              {data.shipping[0].recipientName}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Nomor Telepon
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].phoneNumber}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Alamat
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].address}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Kota / Kabupaten
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].city.cityName}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Provinsi
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].city.province.provinceName}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Kode Pos
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].postalCode}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Metode Pengiriman
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].shippingMethod}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Harga Pengiriman
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {rupiahFormat(data.shipping[0].shippingCost)}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Total Harga
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {rupiahFormat(
                parseInt(order.totalPrice) +
                  parseInt(data.shipping[0].shippingCost)
              )}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Tanggal Pengiriman
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].shippingDate}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Nomor Resi
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].trackingNumber}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Status
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {capitalizeFirstLetter(data.shipping[0].status)}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-center mt-16 gap-5">
        {payButton ? (
          <Button
            onClick={handlePayment}
            className={"px-10 py-4 rounded-xl text-md"}
          >
            Bayar Sekarang
          </Button>
        ) : (
          ""
        )}
        {nextPayButton ? (
          <Button
            onClick={handleResumePayment}
            className={"px-10 py-4 rounded-xl text-md"}
          >
            Lanjutkan Pembayaran
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShippingDataSection;
