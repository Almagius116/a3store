import { useNavigate } from "react-router-dom";
import { rupiahFormat } from "../../utils/helper";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail-product/${id}`);
  };
  console.log(product);
  return (
    <>
      <div
        className="h-52 w-44 bg-gray-50 rounded-xl shadow-md"
        onClick={() => handleClick(product.id)}
      >
        <div className="grid p-1.5">
          <div className="h-28 rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-md"
              src={product.images[0]}
            />
          </div>
          <div className="grid items-center text-xs p-1.5 gap-2">
            <p>{product.name}</p>
            <p>{rupiahFormat(product.price)}</p>
            <p>Stock : {product.stock}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
