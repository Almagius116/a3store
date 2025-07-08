import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createOrder } from "../features/order/orderService";
import Button from "../components/buttons/Button";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import ConfirmationModal from "../components/modal/ConfirmationModal";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../features/cart/cartSlice";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.user.user.id);
  const [isDisabled, setIsDisabled] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      />
      <Navbar />
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
