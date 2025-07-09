import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createOrder } from "../features/order/orderService";
import Button from "../components/buttons/Button";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import ConfirmationModal from "../components/modal/ConfirmationModal";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../features/cart/cartSlice";
import { add, resetInfo } from "../features/info/infoSlice";
import { resetUser } from "../features/auth/authSlice";
import SelectionButtonModal from "../components/modal/SelectionButtonModal";
import { logout } from "../features/auth/authService";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.user.user.id);
  const [isDisabled, setIsDisabled] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        navigate(`/user/${userId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const total = items.reduce((sum, item) => sum + item.totalPriceProduct, 0);
    setTotalPrice(total);
  }, [items]);

  useEffect(() => {
    if (items.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [items]);

  const handleOrder = async () => {
    try {
      const res = await createOrder({
        userId: userId,
        items: items.map((item) => ({
          productId: item.id,
          quantity: item.qty,
          unitPrice: item.price,
        })),
        totalPrice: totalPrice,
      });
      dispatch(resetCart());
      navigate(`/order/${res.data.data.newOrder.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const closeConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <>
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={closeConfirmationModal}
        onConfirm={handleOrder}
        message={"Apakah anda yakin ingin melanjutkan pemesanan?"}
        btnMsg={"Ya, Lanjutkan"}
      />
      <Navbar userInfo={() => setProfileMenuModal(true)} />
      <SelectionButtonModal
        isOpen={profileMenuModal}
        onClose={() => setProfileMenuModal(false)}
        options={["Profile", "Notification", "History", "Orders", "Logout"]}
        onSelect={handleSelect}
      />
      <div className="mt-10 mb-52 flex flex-col items-center">
        <CartItem items={items} totalPrice={totalPrice} />
        <Button
          onClick={() => setShowConfirmationModal(true)}
          isDisabled={isDisabled}
          className="mt-10 rounded-xl w-40"
        >
          Pesan
        </Button>
      </div>
    </>
  );
};

export default CartPage;
