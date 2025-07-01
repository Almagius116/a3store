import { useSelector } from "react-redux";
import Button from "../components/buttons/Button";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (items.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [items]);

  return (
    <>
      <Navbar />
      <div className="mt-10 mb-52 flex flex-col items-center">
        <CartItem />
        <Button
          onClick={() => alert("Tombol diklik!")}
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
