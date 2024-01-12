"use client";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { FC } from "react";
interface Props {}

const ExitButton: FC<Props> = ({}) => {
  const { replace } = useRouter();
  const { setSession } = useStore();

  const handleLogOut = () => {
    setSession(false);
    replace("/");
  };

  return (
    <button
      onClick={handleLogOut}
      className="text-white bg-red-700 hover:bg-red-800 me-2 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
    >
      Salir
    </button>
  );
};

export default ExitButton;
