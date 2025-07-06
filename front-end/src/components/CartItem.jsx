import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./buttons/Button";
import { useNavigate } from "react-router-dom";
import { plusQty, minusQty, remove } from "../features/cart/cartSlice";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { rupiahFormat } from "../utils/helper";

const CartItem = ({ items, totalPrice }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nav = (id) => {
    navigate(`/detail-product/${id}`);
  };

  return (
    <>
      <div className="w-[80%]">
        <table className="min-w-full text-center text-sm font-light">
          <thead className="border-b-2 border-gray-300 text-gray-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                NO
              </th>
              <th scope="col" className="px-6 py-4">
                Product
              </th>
              <th scope="col" className="px-6 py-4">
                Quantity
              </th>
              <th scope="col" className="px-6 py-4">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className="border-b-2 border-gray-300 text-gray-500">
                <td className="whitespace-nowrap px-6 py-8 font-medium">
                  {i + 1}
                </td>
                <td
                  onClick={() => nav(item.id)}
                  className="whitespace-nowrap px-6 py-8 hover:text-gray-800 cursor-pointer"
                >
                  {item.name}
                </td>
                <td className="whitespace-nowrap px-6 py-8">
                  <div className="flex justify-center items-center gap-5">
                    <div className="h-full flex items-center bg-gray-200 rounded-md gap-1.5 text-gray-500">
                      <Button
                        className={
                          "px-1.5 bg-white/0 shadow-none hover:bg-gray-300"
                        }
                        onClick={() => dispatch(minusQty(i))}
                      >
                        <MinusIcon className="h-4 w-4 text-gray-500" />
                      </Button>
                      <p className="px-1">{item.qty}</p>
                      <Button
                        className={
                          "px-1.5 bg-white/0 shadow-none hover:bg-gray-300"
                        }
                        onClick={() => dispatch(plusQty(i))}
                      >
                        <PlusIcon className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  </div>
                </td>

                <td className="whitespace-nowrap px-6 py-8 relative">
                  <div className="absolute top-0 right-0">
                    <Button
                      onClick={() => dispatch(remove({ i }))}
                      className={
                        "bg-white hover:bg-white shadow-none rounded-md p-0.5"
                      }
                    >
                      <XMarkIcon className="w-4 h-4 text-gray-500 hover:text-gray-800" />
                    </Button>
                  </div>
                  {rupiahFormat(item.totalPriceProduct)}
                </td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr className="text-gray-500">
              <td className="whitespace-nowrap px-6 py-8 font-medium">Total</td>
              <td className="whitespace-nowrap px-6 py-8"></td>
              <td className="whitespace-nowrap px-6 py-8"></td>
              <td className="whitespace-nowrap px-6 py-8">
                {rupiahFormat(totalPrice)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartItem;
