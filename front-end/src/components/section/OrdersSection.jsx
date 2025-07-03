const OrdersSection = () => {
  return (
    <section className="w-full grid gap-1">
      <p className="font-bold text-gray-500">Orders</p>
      <div className="bg-gray-50 border border-gray-200 rounded-sm p-[1px] shadow-md">
        <div className=" bg-gray-100 grid grid-cols-2 text-sm p-1 px-2 rounded-xs">
          <div className="text-[10px] pt-3">
            <ul>
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
              <li>Product 4</li>
              <li>Product 5</li>
            </ul>
          </div>
          <div className="relative bg-gray-100">
            <div className="absolute text-[8px] right-0">24, Mei 2024</div>
            <div className="flex justify-center items-center h-full">
              <div className="text-xs">
                <p>Rp. 200203102</p>
                <p>
                  Status : <span className="text-sm">Pending</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersSection;
