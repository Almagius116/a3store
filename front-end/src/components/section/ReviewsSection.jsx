import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

const reviews = [
  {
    name: "Ahmad Fauzi",
    comment: "Produk sangat bagus dan pengiriman cepat!",
    rating: 5,
  },
  {
    name: "Siti Rahmawati",
    comment: "Pelayanan memuaskan, kualitas oke.",
    rating: 4,
  },
  {
    name: "Dimas Pratama",
    comment: "Barang sesuai deskripsi, recommended seller.",
    rating: 5,
  },
  {
    name: "Rina Anggraini",
    comment: "Harga terjangkau, tapi kualitas standar.",
    rating: 2,
  },
  {
    name: "Fajar Nugroho",
    comment: "Packing kurang rapi, tapi barang aman.",
    rating: 4,
  },
  {
    name: "Melati Putri",
    comment: "Warna tidak sesuai gambar, agak kecewa.",
    rating: 1,
  },
  {
    name: "Bayu Saputra",
    comment: "Fast response dan pengiriman cepat.",
    rating: 5,
  },
  {
    name: "Lestari Widya",
    comment: "Ukuran pas dan nyaman dipakai.",
    rating: 5,
  },
  {
    name: "Hendra Wijaya",
    comment: "Kualitas kurang bagus, tapi bisa dipakai.",
    rating: 3,
  },
  {
    name: "Nadia Kusuma",
    comment: "Sudah belanja di sini berkali-kali, selalu puas!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <div className="w-full pb-32 grid grid-cols-1 gap-2.5">
      {reviews.map((review, i) => (
        <div className="relative bg-gray-50 flex items-center p-3 w-full gap-4 rounded-sm shadow-sm">
          <div className="absolute top-2 right-3 flex">
            {Array.from({ length: review.rating }).map((_, i) => (
              <StarSolid className="w-3 h-3 text-yellow-400" />
            ))}
            {Array.from({ length: 5 - review.rating }).map((_, i) => (
              <StarOutline className="w-3 h-3 text-yellow-400" />
            ))}
          </div>
          <div className="h-15 w-15 bg-amber-200 rounded-full border-2 border-gray-400">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://ik.imagekit.io/a3store/profile-default.png?updatedAt=1751311555417"
            />
          </div>
          <div className="w-[85%] h-full grid border-b-2 border-gray-200">
            <p className="text-[14px]">{review.name}</p>
            <p className="text-[12px] text-gray-500">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
