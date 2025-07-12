import { useNavigate, useParams } from "react-router-dom";
import { getAllOrders } from "../../features/order/orderService";
import { useCallback } from "react";
import { useFetch } from "../../hooks/useFetch";
import {
  capitalizeFirstLetter,
  dateFormat,
  rupiahFormat,
} from "../../utils/helper";

const OrdersSection = () => {
  const { id } = useParams();
  const getOrders = useCallback(
    () => getAllOrders({ userId: id, status: "" }),
    [id]
  );
  const { data, loading, error } = useFetch(getOrders);
  const navigate = useNavigate();

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Terjadi Error: {error.message}</p>;

  console.log(data);

  const handleOrderNavigation = (id) => {
    navigate(`/order/${id}`);
  };

  return (
    <section className="w-full grid gap-1">
      <p className="font-bold text-gray-500">Orders</p>
      {data?.orders?.map((order, i) => (
        <div
          onClick={() => handleOrderNavigation(order.id)}
          key={i}
          className="bg-gray-50 border border-gray-200 rounded-sm p-[1px] shadow-md"
        >
          <div className=" bg-gray-100 grid grid-cols-2 text-sm p-1 px-2 rounded-xs min-h-20">
            <div className="text-[10px] pt-3">
              {order?.orderItem?.map((item, i) => (
                <ul key={i}>
                  <li>
                    {i + 1}. {item.product.name} x {item.quantity}
                  </li>
                </ul>
              ))}
            </div>
            <div className="relative bg-gray-100">
              <div className="absolute text-[8px] right-0">
                {dateFormat(order.createdAt)}
              </div>
              <div className="flex justify-center items-center h-full">
                <div className="text-xs">
                  <p>{rupiahFormat(order.totalPrice)}</p>
                  <p>
                    Status : <span>{capitalizeFirstLetter(order.status)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OrdersSection;
