import { useCallback, useState } from "react";
import DropdownButton from "../../buttons/DropdownButton";
import { getAllOrders } from "../../../features/order/orderService";
import { useFetch } from "../../../hooks/useFetch";
import {
  capitalizeFirstLetter,
  dateFormat,
  rupiahFormat,
} from "../../../utils/helper";

const ManageOrders = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const getOrders = useCallback(() => {
    if (selectedFilter === "all") {
      return getAllOrders({ status: "" });
    } else {
      return getAllOrders({ status: selectedFilter });
    }
  }, [selectedFilter]);

  const { data, loading, error } = useFetch(getOrders);

  const handleSelect = (value) => {
    setSelectedFilter(value);
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Terjadi Error: {error.message}</p>;

  console.log(data.orders);

  return (
    <div className="h-full">
      <p className=" text-2xl text-gray-500 font-semibold pl-7">Orders</p>
      <div className="bg-white rounded-xl h-[6000px] w-full mt-7">
        <DropdownButton
          label={selectedFilter}
          options={["all", "pending", "paid", "canceled"]}
          onSelect={handleSelect}
        />
        <div className="p-2 pl-5">
          <table className="w-full text-gray-600">
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Order Id
                </th>
                <th scope="col" className="px-6 py-4">
                  Customer
                </th>
                <th scope="col" className="px-6 py-4">
                  Harga
                </th>
                <th scope="col" className="px-6 py-4">
                  Status
                </th>
                <th scope="col" className="px-6 py-4">
                  Tanggal
                </th>
              </tr>
            </thead>
            <tbody>
              {data.orders.map((order, i) => (
                <tr className="hover:bg-gray-200">
                  <td className="px-6 py-4 text-center">Order-{order.id}</td>
                  <td className="px-6 py-4 text-center">
                    {order.user.fullName}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {rupiahFormat(order.totalPrice)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p
                      className={`p-2 rounded-sm ${
                        order.status === "pending"
                          ? "bg-amber-100"
                          : order.status === "paid"
                          ? "bg-green-300"
                          : order.status === "canceled"
                          ? "bg-red-200"
                          : ""
                      }`}
                    >
                      {capitalizeFirstLetter(order.status)}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {dateFormat(order.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
