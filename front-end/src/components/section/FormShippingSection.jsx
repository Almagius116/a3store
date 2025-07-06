import Button from "../buttons/Button";
import InputText from "../input/InputText";

const FormShippingSection = () => {
  return (
    <form>
      <p className="text-2xl ml-2 font-medium text-gray-500">Data Pengiriman</p>
      <div className="text-sm text-gray-600 mt-10">
        <div className="grid grid-cols-2 gap-7 lg:gap-14">
          <div className="grid gap-2">
            <p className="ml-4">Nama Penerima</p>
            <InputText
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
          <div className="grid gap-2">
            <p className="ml-4">Nomor Telepon</p>
            <InputText
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
        </div>
        <div className="grid gap-2">
          <p className="ml-4">Alamat</p>
          <InputText
            className={"w-full border border-gray-300 focus:border-gray-400"}
          />
        </div>
        <div className="grid grid-cols-3 gap-7 lg:gap-14">
          <div className="grid gap-2">
            <p className="ml-4">Kota / Kabupaten</p>
            <InputText
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
          <div className="grid gap-2">
            <p className="ml-4">Provinsi</p>
            <InputText
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
          <div className="grid gap-2">
            <p className="ml-4">Kode Pos</p>
            <InputText
              className={"w-full border border-gray-300 focus:border-gray-400"}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button
          onClick={() => handlePayment(order)}
          className={"px-10 py-4 rounded-xl text-md"}
        >
          Bayar Sekarang
        </Button>
      </div>
    </form>
  );
};

export default FormShippingSection;
