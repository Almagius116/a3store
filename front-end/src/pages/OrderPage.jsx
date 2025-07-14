import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getOrderById } from "../features/order/orderService";
import { useFetch } from "../hooks/useFetch";
import Navbar from "../components/Navbar";
import OrderItemsSection from "../components/section/OrderItemsSection";
import FormShippingSection from "../components/section/FormShippingSection";
import { capitalizeFirstLetter } from "../utils/helper";
import ShippingDataSection from "../components/section/ShippingDataSection";
import { getShippingByOrderId } from "../features/shipping/shippingService";
import { useDispatch, useSelector } from "react-redux";
import { add, resetInfo } from "../features/info/infoSlice";
import { logout } from "../features/auth/authService";
import { resetUser } from "../features/auth/authSlice";
import { resetCart } from "../features/cart/cartSlice";
import SelectionButtonModal from "../components/modal/SelectionButtonModal";
import { getPaymentByOrderId } from "../features/payment/paymentService";

const OrderPage = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
  } = useFetch(useCallback(() => getPaymentByOrderId({ orderId: id }), [id]));
  console.log("payment di orderpage: ", payment);

  const [profileMenuModal, setProfileMenuModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (selectedOption !== null) {
      dispatch(
        add({
          selectedInfo: selectedOption,
        })
      );
    }
  }, [selectedOption]);

  const handleSelect = async (option) => {
    try {
      if (option === "Logout") {
        await logout();
        dispatch(resetUser());
        dispatch(resetInfo());
        dispatch(resetCart());
        navigate("/signin");
      } else {
        setSelectedOption(option);
        navigate(`/user/${user.id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (orderLoading) return <p>Loading produk...</p>;
  if (orderError) return <p>Terjadi error: {orderError.message}</p>;
  if (shippingLoading) return <p>Loading produk...</p>;
  if (shippingError) return <p>Terjadi error: {shippingError.message}</p>;
  if (paymentLoading) return <p>Loading produk...</p>;
  if (paymentError) return <p>Terjadi error: {shippingError.message}</p>;

  return (
    <>
      <Navbar userInfo={() => setProfileMenuModal(true)} />
      <SelectionButtonModal
        isOpen={profileMenuModal}
        onClose={() => setProfileMenuModal(false)}
        options={["Profile", "Notification", "History", "Orders", "Logout"]}
        onSelect={handleSelect}
      />
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
              <OrderItemsSection
                order={order}
                refetch={refetch}
                paymentId={payment?.data?.data?.payment[0]?.id}
              />
              {shipping.shipping.length > 0 ? (
                <ShippingDataSection
                  data={shipping}
                  payment={payment}
                  id={id}
                />
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
