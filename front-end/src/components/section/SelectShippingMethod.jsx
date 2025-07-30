import { useEffect, useState } from "react";
import {
  calculateShippingCost,
  updateShipping,
} from "../../features/shipping/shippingService";
import Button from "../buttons/Button";
import { rupiahFormat } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const originId = import.meta.env.VITE_ORIGIN_CITY_ID;

const SelectShippingMethod = ({ data, price }) => {
  const [rajaOngkirData, setRajaOngkirData] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (data) => {
    setSelectedMethod(data);
  };

  const handleToPayment = async () => {
    const updatedShipping = {
      shippingCost: selectedMethod.cost,
      shippingMethod: selectedMethod.service + "-" + selectedMethod.description,
    };
    await updateShipping(data.shipping[0].id, updatedShipping);
    navigate(0);
  };

  useEffect(() => {
    const apiRajaOngkir = async () => {
      try {
        const res = await calculateShippingCost({
          origin: originId.toString(),
          destination: data.shipping[0].districtId.toString(),
          weight: data.shipping[0].totalWeight,
          courier: data.shipping[0].shippingMethod,
          price: "lowest",
        });

        const serviceList = res?.data?.data?.data;
        if (Array.isArray(serviceList)) {
          setRajaOngkirData(serviceList);
        } else {
          console.error("Data dari RajaOngkir tidak sesuai ekspektasi", res);
          setRajaOngkirData([]);
        }
      } catch (err) {
        console.error("Gagal memanggil API RajaOngkir:", err);
        setRajaOngkirData([]);
      }
    };

    if (data?.shipping?.length > 0) {
      apiRajaOngkir();
    }
  }, [data]);

  return (
    <div className="w-full grid gap-5">
      {rajaOngkirData.map((item, i) => (
        <div
          key={i}
          onClick={() => handleSelect(item)}
          className={`w-full bg-gray-200 rounded-md flex gap-5 p-5 shadow-md hover:border hover:border-gray-300 ${
            selectedMethod?.service === item.service
              ? "border-2 border-blue-500"
              : ""
          }`}
        >
          <div className="bg-white w-28 h-28 rounded-md"></div>
          <div className="flex items-center">
            <table className="text-gray-500">
              <tbody>
                <tr>
                  <td className="whitespace-nowrap font-medium w-[30%]">
                    Layanan
                  </td>
                  <td className="pl-5 font-medium break-words whitespace-pre-wrap">
                    : {item.service} - {item.description}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap font-medium w-[30%]">
                    Estimasi
                  </td>
                  <td className="pl-5 font-medium break-words whitespace-pre-wrap">
                    : {item.etd}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap font-medium w-[30%]">
                    Harga Pengiriman
                  </td>
                  <td className="pl-5 font-medium break-words whitespace-pre-wrap">
                    : {rupiahFormat(item.cost)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <Button onClick={handleToPayment} disabled={!selectedMethod}>
        Lanjut ke Pembayaran
      </Button>
    </div>
  );
};

export default SelectShippingMethod;
