import { useSelector } from "react-redux";
import InputText from "../input/InputText";
import { CameraIcon } from "@heroicons/react/24/solid";
import { useCallback } from "react";
import { useFetch } from "../../hooks/useFetch";
import { profile } from "../../features/user/userService";
import Button from "../buttons/Button";

const ProfileSection = () => {
  const id = useSelector((state) => state.user.user.id);
  const getUser = useCallback(() => profile(id), [id]);
  const { data: res, loading, error } = useFetch(getUser);

  if (loading) return <p>Loading produk...</p>;
  if (error) return <p>Terjadi error: {error.message}</p>;

  const user = res.data.data.user;

  return (
    <section className="w-full">
      <div className="w-full flex items-center">
        <div className="bg-gray-300 relative w-35 h-35 rounded-full p-1 m-16 shadow-xl border-2 border-gray-200">
          <img
            className=" w-full h-full rounded-full"
            src={`${user.profilePicture}`}
          />
          <CameraIcon className="absolute top-24 right-0 w-9 h-9 text-gray-500" />
        </div>
      </div>
      <div className="bg-gray-100 border-[0.2px] border-gray-200 flex flex-col py-5 px-10 gap-1 text-gray-700 rounded-3xl shadow-md">
        <form>
          <div className="flex flex-col gap-2.5">
            <p className="ml-3 font-medium">Nama</p>
            <InputText
              className={"font-normal min-w-52 bg-white w-[40%] px-3.5"}
            ></InputText>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="ml-3 font-medium">Email</p>
            <InputText
              className={"font-normal min-w-52 bg-white w-[40%] px-3.5"}
            ></InputText>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="ml-3 font-medium">Email</p>
            <InputText
              className={"font-normal min-w-52 bg-white w-[40%] px-3.5"}
            ></InputText>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="ml-3 font-medium">Nomor Telepon</p>
            <InputText
              className={"font-normal min-w-52 bg-white w-[40%] px-3.5"}
            ></InputText>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="ml-3 font-medium">Alamat</p>
            <textarea
              name=""
              className="min-w-52 w-[65%] h-40 bg-white focus:outline-none rounded-2xl px-3.5 resize-none py-3.5"
              id=""
            ></textarea>
          </div>
          <div className="flex flex-col gap-2.5 mt-5">
            <p className="ml-3 font-medium">Password</p>
            <InputText
              className={"font-normal min-w-52 bg-white w-[40%] px-3.5"}
            ></InputText>
          </div>
          <div className="flex justify-center mt-10">
            <Button>Save Changes</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProfileSection;
