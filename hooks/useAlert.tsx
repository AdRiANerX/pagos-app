import SuccessAlert from "@/components/alert/SuccessAlert";
import { useState } from "react";

interface Props {
  message: string;
}

export const useAlert = ({ message }: Props) => {
  const [toastControl, setToastControl] = useState(false);

  const AlertComponent = (
    <SuccessAlert
      message={message}
      isActive={toastControl}
      setIsActive={setToastControl}
    />
  );

  return { AlertComponent, toastControl, setToastControl };
};
