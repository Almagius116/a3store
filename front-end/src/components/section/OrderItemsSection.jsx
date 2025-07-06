import { rupiahFormat } from "../../utils/helper";

const OrderItemsSection = ({ order }) => {
  const items = order.orderItem;
  return (
    <table className="min-w-full text-center text-sm font-light">
      <thead className="border-b-2 border-gray-300 text-gray-500">
        <tr>
          <th scope="col" className="px-6 py-4">
            NO
          </th>
          <th scope="col" className="px-6 py-4"></th>
          <th scope="col" className="pl-3 pr-6 lg:px-0 py-4">
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
            <td className="whitespace-nowrap px-6 py-8 font-medium">{i + 1}</td>

            <td className="whitespace-nowrap py-8 font-medium">
              <div className="w-full flex justify-center">
                <img
                  className={"w-full min-w-[75px] max-w-32 rounded-md"}
                  src={item.product.images[0]}
                />
              </div>
            </td>
            <td className="whitespace-nowrap pl-3 pr-6 lg:px-6 py-8 hover:text-gray-800 cursor-pointer">
              {item.product.name}
            </td>
            <td className="whitespace-nowrap px-6 py-8">{item.quantity}</td>

            <td className="whitespace-nowrap px-6 py-8 relative">
              {rupiahFormat(item.product.price)}
            </td>
          </tr>
        ))}
      </tbody>
      <tbody>
        <tr className="text-gray-500">
          <td className="whitespace-nowrap px-6 py-8 font-medium">Total</td>
          <td className="whitespace-nowrap px-6 py-8"></td>
          <td className="whitespace-nowrap px-6 py-8"></td>
          <td className="whitespace-nowrap px-6 py-8"></td>
          <td className="whitespace-nowrap px-6 py-8">
            {rupiahFormat(order.totalPrice)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderItemsSection;
