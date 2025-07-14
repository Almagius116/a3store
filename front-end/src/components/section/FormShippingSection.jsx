import Button from "../buttons/Button";
import InputText from "../input/InputText";
import {
  midtransPayment,
  createPayment,
} from "../../features/payment/paymentService";
import { updateOrder } from "../../features/order/orderService";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createShipping } from "../../features/shipping/shippingService";
import { useNavigate } from "react-router-dom";

const FormShippingSection = ({ order, refetch }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (order.status === "pending") {
      setIsDisabled(false);
    }
  }, [order.status]);

  const handlePayment = async (order, data) => {
    try {
      const res = await midtransPayment({
        orderId: order.id,
        amount: parseInt(order.totalPrice),
        customerName: order.user.fullName,
        customerEmail: order.user.email,
      });

      const shippingData = data;
      shippingData.orderId = order.id;

      const token = res.data.data.paymentToken;

      window.snap.pay(token, {
        onSuccess: (result) => {
          createPayment({ token, result });
          createShipping(shippingData);
          updateOrder(order.id, { status: "paid" });
          alert("Pembayaran berhasil!");
          refetch();
        },
        onPending: (result) => {
          createPayment({ token, result });
          createShipping(shippingData);
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
  return (
    <form onSubmit={handleSubmit((data) => handlePayment(order, data))}>
      <p className="text-2xl ml-2 font-medium text-gray-500">Data Pengiriman</p>
      <div className="text-sm text-gray-600 mt-10">
        <div className="grid grid-cols-2 gap-7 lg:gap-14">
          <div className="grid gap-2">
            <p className="ml-4">Nama Penerima</p>
            <InputText
              {...register("recipientName", {
                required: "Nama Penerima harus di isi",
              })}
              validation={errors.recipientName?.message}
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
          <div className="grid gap-2">
            <p className="ml-4">Nomor Telepon</p>
            <InputText
              {...register("phoneNumber", {
                required: "Nomor Telepon harus di isi",
                pattern: {
                  value: /^\+62\s?\d{9,13}$/,
                  message: "Format: +62 (Nomor telepon)",
                },
              })}
              validation={errors.phoneNumber?.message}
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <p className="ml-4">Alamat</p>
          <InputText
            {...register("address", {
              required: "Alamat harus di isi",
            })}
            validation={errors.address?.message}
            className={"w-full border border-gray-300 focus:border-gray-400"}
          />
        </div>
        <div className="grid grid-cols-3 gap-7 lg:gap-14">
          <div className="grid gap-2">
            <p className="ml-4">Kota / Kabupaten</p>
            <InputText
              {...register("city", {
                required: "Kota / Kabupaten harus di isi",
              })}
              validation={errors.city?.message}
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
          <div className="grid gap-2">
            <p className="ml-4">Provinsi</p>
            <InputText
              {...register("province", {
                required: "Provinsi harus di isi",
              })}
              validation={errors.province?.message}
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
          <div className="grid gap-2">
            <p className="ml-4">Kode Pos</p>
            <InputText
              {...register("postalCode", {
                required: "Kode Pos harus di isi",
              })}
              validation={errors.postalCode?.message}
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button
          type={"submit"}
          isDisabled={isDisabled}
          className={"px-10 py-4 rounded-xl text-md"}
        >
          Bayar Sekarang
        </Button>
      </div>
    </form>
  );
};

export default FormShippingSection;
