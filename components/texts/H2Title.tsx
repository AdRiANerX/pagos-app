import { FC } from "react";
interface Props {
  text: string;
}

const H2Title: FC<Props> = ({ text }) => {
  return (
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
      {text}
    </h2>
  );
};

export default H2Title;
