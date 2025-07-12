import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useFetch } from "../../hooks/useFetch";
import { useCallback, useEffect, useState } from "react";
import { getOrderById, updateOrder } from "../../features/order/orderService";
import {
  capitalizeFirstLetter,
  dateFormat,
  replaceFormatText,
  rupiahFormat,
} from "../../utils/helper";
import DropdownButton from "../../components/buttons/DropdownButton";
import { updateShipping } from "../../features/shipping/shippingService";

const ManageOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useFetch(
    useCallback(() => getOrderById(id), [id])
  );
  const [selectedUpdateStatusOrder, setSelectedUpdateStatusOrder] =
    useState("");
  const [selectedUpdateStatusShipping, setSelectedUpdateStatusShipping] =
    useState("");

  useEffect(() => {
    if (data && data.status) {
      setSelectedUpdateStatusOrder(data.status);
      setSelectedUpdateStatusShipping(data.shipping.status);
    }
  }, [data]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Terjadi Error: {error.message}</p>;

  const handleSelect = async (value) => {
    await updateOrder(id, { status: value });
    refetch();
  };

  const handleUpdateShippingStatus = async (value) => {
    const updatedShipping = {};
    let status = "pending";
    updatedShipping.status = value;

    if (value === "shipped") {
      updatedShipping.shippingDate = new Date();
    }

    if (value === "pending") {
      status = "paid";
    }

    if (value === "shipped" || value === "in-transit") {
      status = "shipped";
    }

    if (value === "shipped" || value === "in-transit") {
      status = "shipped";
    }

    if (value === "delivered") {
      status = "completed";
    }

    if (value === "failed") {
      status = "canceled";
    }

    await updateShipping(data.shipping.id, updatedShipping);

    await updateOrder(id, { status: status });
    refetch();
  };

  console.log(data);
  return (
    <div className="p-30 py-20">
      <Button
        onClick={() => navigate("/admin")}
        className={
          "text-xl bg-white text-gray-500 shadow-none hover:bg-white hover:text-gray-700"
        }
      >
        <div className="flex items-center gap-5">
          <ChevronLeftIcon className="w-4 h-6" />
          <p>Kembali</p>
        </div>
      </Button>

      <div className="w-full bg-gray-100 rounded-md border border-gray-200 mt-5">
        <div className="flex justify-center p-5 text-xl font-medium text-gray-500">
          Order - {id}
        </div>
        <div>
          <p className="text-xl font-medium text-gray-500 pl-5">Order Info</p>
          <table className="min-w-full text-Start text-sm font-light text-gray-500 mt-5">
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Nama Customer
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data.user.fullName}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%]">
                  Item
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Nama
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Jumlah
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Harga / Unit
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Total Harga Item
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.orderItem.map((item, i) => (
                        <tr>
                          <td className="px-6 py-4 text-center">
                            {item.product.name}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {item.quantity}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {rupiahFormat(item.unitPrice)}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {rupiahFormat(
                              item.quantity * Number(item.unitPrice)
                            )}
                          </td>
                        </tr>
                      ))}
                      <tr></tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%]">
                  Total Harga Order
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap">
                  {rupiahFormat(data.totalPrice)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%]">
                  Status Order
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap">
                  <div className="flex items-center gap-10">
                    <DropdownButton
                      label={selectedUpdateStatusOrder}
                      options={[
                        "pending",
                        "paid",
                        "shipped",
                        "completed",
                        "canceled",
                      ]}
                      onSelect={handleSelect}
                    ></DropdownButton>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-xl font-medium text-gray-500 mt-10 pl-5">
            Payment Info
          </p>
          <table className="min-w-full text-Start text-sm font-light text-gray-500 mt-5">
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Total Harga Dibayar
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {rupiahFormat(data.payment[0].amount)}
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Metode Pembayaran
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {replaceFormatText(data.payment[0].method)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Tanggal Pembayaran
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {dateFormat(data.payment[0].updatedAt)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Status Pembayaran
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {capitalizeFirstLetter(data.payment[0].status)}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-xl font-medium text-gray-500 mt-10 pl-5">
            Shipping Info
          </p>
          <table className="min-w-full text-Start text-sm font-light text-gray-500 mt-5">
            <tbody>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Nama Penerima
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data.shipping.recipientName}
                </td>
              </tr>

              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Nomor Telepon
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data.shipping.phoneNumber}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Alamat
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data.shipping.address}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Kota / Kabupaten
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data?.shipping?.city}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Provinsi
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data?.shipping?.province}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Kode Pos
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data?.shipping?.postalCode}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Kode Pos
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data?.shipping?.postalCode}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Tanggal Pengiriman
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {dateFormat(data?.shipping?.shippingDate)}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Metode Pengiriman
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data?.shipping?.shippingMethod}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Nomor Resi
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  {data?.shipping?.trackingNumber}
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 border-l-1 w-[30%] border-t-1">
                  Status
                </td>
                <td className="px-6 py-8 font-medium border-r-1 border-b-1 border-gray-300 break-words whitespace-pre-wrap border-t-1">
                  <div className="flex items-center gap-10">
                    <DropdownButton
                      label={selectedUpdateStatusShipping}
                      options={[
                        "pending",
                        "shipped",
                        "in-transit",
                        "delivered",
                        "failed",
                      ]}
                      onSelect={handleUpdateShippingStatus}
                    ></DropdownButton>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
