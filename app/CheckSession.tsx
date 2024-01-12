"use client";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { FC, Fragment } from "react";
interface Props {}

const CheckSession: FC<Props> = ({}) => {
  const { userIsLoggedIn } = useStore();
  const { replace } = useRouter();

  if (!userIsLoggedIn) {
    replace("/");
    return null;
  }
  return <Fragment></Fragment>;
};

export default CheckSession;
