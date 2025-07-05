import { useCallback, useState } from "react";
import { getAllProducts } from "../../features/products/productService";
import { useFetch } from "../../hooks/useFetch";
import Card from "../cards/Card";

const PaginationSection = ({ minPrice, maxPrice, category }) => {
  const [page, setPage] = useState(1);
  const limit = 12;

  const getProducts = useCallback(
    () => getAllProducts({ page, limit, minPrice, maxPrice, category }),
    [page, limit, minPrice, maxPrice, category]
  );
  const { data, loading, error } = useFetch(getProducts);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Terjadi Error: {error.message}</p>;

  return (
    <section className="mb-20">
      <div className="grid grid-cols-4 gap-3 min-h-[648px]">
        {data.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-5 py-1 bg-indigo-400 hover:bg-indigo-600 transition duration-700 text-white rounded-md cursor-pointer disabled:bg-indigo-200 disabled:cursor-not-allowed disabled:hover:bg-indigo-200 disabled:transition-none"
        >
          Prev
        </button>

        <div className=" flex gap-2">
          {Array.from({ length: data.totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 rounded-md cursor-pointer ${
                page === p ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, data.totalPages))}
          disabled={page === data.totalPages}
          className="px-5 py-1 bg-indigo-400 hover:bg-indigo-600 transition duration-700  text-white rounded-md cursor-pointer disabled:bg-indigo-200 disabled:cursor-not-allowed disabled:hover:bg-indigo-200 disabled:duration-300"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default PaginationSection;
