import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { profile } from "../features/user/userService";
import { useCallback, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import InputText from "../components/input/InputText";

const ProfilePage = () => {
  const id = useSelector((state) => state.user.user.id);
  const getUser = useCallback(() => profile(id), [id]);
  const { data: user, loading, error } = useFetch(getUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (loading) return <p>Loading produk...</p>;
  if (error) return <p>Terjadi error: {error.message}</p>;

  return (
    <>
      <Navbar />
      <div className="flex">
        <section className="bg-amber-300 w-[35%] h-96"></section>
        <section className="bg-amber-200 w-[65%] h-96"></section>
      </div>
    </>
  );
};

export default ProfilePage;
