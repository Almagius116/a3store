import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail-product/${id}`);
  };

  return (
    <>
      <div
        className="h-52 w-44 bg-gray-50 rounded-xl shadow-md"
        onClick={() => handleClick(product.id)}
      >
        <div className="grid p-1.5">
          <div className="h-28 bg-gray-400 rounded-md"></div>
          <div className="grid items-center text-xs p-1.5 gap-2">
            <p>{product.name}</p>
            <p>Price : {product.price.toLocaleString("id-ID")}</p>
            <p>Stock : {product.stock}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
