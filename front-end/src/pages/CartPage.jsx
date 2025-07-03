import { useSelector } from "react-redux";
import Button from "../components/buttons/Button";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { createOrder } from "../features/order/orderService";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.user.user.id);
  const [isDisabled, setIsDisabled] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
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

  const handleOrder = async (userId, items) => {
    try {
      console.log({
        userId: userId,
        items: items.map((item) => ({
          productId: item.id,
          quantity: item.qty,
          unitPrice: item.price,
        })),
        totalPrice: totalPrice,
      });
      const res = await createOrder({
        userId: userId,
        items: items.map((item) => ({
          productId: item.id,
          quantity: item.qty,
          unitPrice: item.price,
        })),
        totalPrice: totalPrice,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 mb-52 flex flex-col items-center">
        <CartItem items={items} totalPrice={totalPrice} />
        <Button
          onClick={() => handleOrder(userId, items)}
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
