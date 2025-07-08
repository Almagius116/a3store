import { capitalizeFirstLetter } from "../../utils/helper";

const ShippingDataSection = ({ data }) => {
  console.log(data.shipping[0]);
  return (
    <div className="text-gray-600">
      <p className="text-2xl font-medium">Data Pengiriman</p>
      <table className="min-w-full text-Start text-sm font-light mt-10">
        <tbody>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%] border-t-2">
              Nama Penerima
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap border-t-2">
              {data.shipping[0].recipientName}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Nomor Telepon
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].phoneNumber}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Alamat
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].address}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Kota / Kabupaten
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].city}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Provinsi
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].province}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Kode Pos
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].postalCode}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Tanggal Pengiriman
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].shippingDate}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Metode Pengiriman
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].shippingMethod}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Nomor Resi
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {data.shipping[0].trackingNumber}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 border-l-2 w-[30%]">
              Status
            </td>
            <td className="px-6 py-8 font-medium border-r-2 border-b-2 border-gray-300 break-words whitespace-pre-wrap">
              {capitalizeFirstLetter(data.shipping[0].status)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShippingDataSection;
