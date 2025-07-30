import Button from "../buttons/Button";
import InputText from "../input/InputText";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createShipping,
  getDistrict,
} from "../../features/shipping/shippingService";
import { useNavigate } from "react-router-dom";
import ListButton from "../buttons/ListButton";
import { getAllProvince } from "../../features/province/provinceService";
import { useFetch } from "../../hooks/useFetch";
import { getAllCity } from "../../features/city/cityService";

const shippingMethods = [
  { id: 1, methodCode: "jne", name: "JNE" },
  { id: 2, methodCode: "sicepat", name: "SiCepat" },
  { id: 3, methodCode: "ide", name: "ID Express" },
  { id: 4, methodCode: "sap", name: "SAP Express" },
  { id: 5, methodCode: "jnt", name: "J&T" },
  { id: 6, methodCode: "ninja", name: "Ninja Xpress" },
];

const FormShippingSection = ({ order, refetch }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    data: cities,
    citiesLoading,
    citiesError,
  } = useFetch(
    useCallback(
      () => getAllCity({ provinceId: selectedProvince.provinceId }),
      [selectedProvince]
    )
  );

  const {
    data: district,
    districtLoading,
    districtError,
  } = useFetch(
    useCallback(
      () => getDistrict({ cityId: selectedCity.cityId }),
      [selectedCity]
    )
  );

  const {
    data: provinces,
    loading: provinceLoading,
    error: provinceError,
  } = useFetch(useCallback(() => getAllProvince(), []));

  useEffect(() => {
    if (order.status === "pending") {
      setIsDisabled(false);
    }
  }, [order.status]);

  const handleSelectedProvince = (province) => {
    setSelectedProvince(province);
  };

  const handleSelectedCity = (city) => {
    setSelectedCity(city);
  };

  const handleSelectedDistrict = (district) => {
    setSelectedDistrict(district);
  };

  const handleSelectedMethod = (method) => {
    setSelectedMethod(method);
  };

  const handleShipping = async (data) => {
    try {
      const shippingData = data;
      shippingData.cityId = selectedCity.id;
      shippingData.shippingMethod = selectedMethod.methodCode;
      shippingData.totalWeight = order.totalWeight;
      shippingData.orderId = order.id;
      shippingData.districtId = selectedDistrict.id;
      shippingData.districtName = selectedDistrict.name;
      createShipping(shippingData);
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  if (provinceLoading) return <p>Loading province...</p>;
  if (provinceError) return <p>Terjadi error: {provinceError.message}</p>;
  if (citiesLoading) return <p>Loading cities...</p>;
  if (citiesError) return <p>Terjadi error: {citiesError.message}</p>;
  if (districtLoading) return <p>Loading district...</p>;
  if (districtError) return <p>Terjadi error: {districtError.message}</p>;

  return (
    <>
      <form onSubmit={handleSubmit((data) => handleShipping(data))}>
        <p className="text-2xl ml-2 font-medium text-gray-500">
          Data Pengiriman
        </p>
        <div className="text-sm text-gray-600 mt-10">
          <div className="grid grid-cols-2 gap-7 lg:gap-14">
            <div className="grid gap-2">
              <p className="ml-4">Nama Penerima</p>
              <InputText
                {...register("recipientName", {
                  required: "Nama Penerima harus di isi",
                })}
                validation={errors.recipientName?.message}
                className={
                  "w-full border border-gray-300 focus:border-gray-400"
                }
              />
            </div>
            <div className="grid gap-2">
              <p className="ml-4">Nomor Telepon</p>
              <InputText
                {...register("phoneNumber", {
                  required: "Nomor Telepon harus di isi",
                  pattern: {
                    value: /^\+62\s?\d{9,13}$/,
                    message: "Format: +62 (Nomor telepon)",
                  },
                })}
                validation={errors.phoneNumber?.message}
                className={
                  "w-full border border-gray-300 focus:border-gray-400"
                }
              />
            </div>
          </div>
          <div className="grid gap-2">
            <p className="ml-4">Alamat</p>
            <InputText
              {...register("address", {
                required: "Alamat harus di isi",
              })}
              validation={errors.address?.message}
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
          <div className="grid gap-2 w-1/3">
            <p className="ml-4">Kode Pos</p>
            <InputText
              {...register("postalCode", {
                required: "Kode Pos harus di isi",
              })}
              validation={errors.postalCode?.message}
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
          <div className="grid grid-cols-3 gap-7 lg:gap-14">
            {provinces ? (
              <div>
                <p className="ml-4">Provinsi</p>
                <ListButton
                  data={provinces.provinces}
                  handleSelect={handleSelectedProvince}
                  fieldName={"provinceName"}
                />
              </div>
            ) : (
              ""
            )}
            {cities ? (
              <div>
                <p className="ml-4">Kota/Kabupaten</p>
                <ListButton
                  data={cities.cities}
                  fieldName={"cityName"}
                  handleSelect={handleSelectedCity}
                />
              </div>
            ) : (
              ""
            )}
            {district?.data?.data?.district?.data ? (
              <div>
                <p className="ml-4">Kecamatan</p>
                <ListButton
                  data={district.data.data.district.data}
                  fieldName={"name"}
                  handleSelect={handleSelectedDistrict}
                />
              </div>
            ) : (
              ""
            )}
            <div>
              <p className="ml-4">Kurir</p>
              <ListButton
                data={shippingMethods}
                fieldName={"name"}
                handleSelect={handleSelectedMethod}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            type={"submit"}
            isDisabled={isDisabled}
            className={"px-10 py-4 rounded-xl text-md"}
          >
            Pilih Pengiriman
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormShippingSection;
