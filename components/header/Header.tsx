import { FC } from "react";
import H2Title from "../texts/H2Title";
import Link from "next/link";
interface Props {
  title: string;
  backLink?: string;
}

const HeaderComponent: FC<Props> = ({ title, backLink }) => {
  return (
    <div className="py-8 lg:py-16 px-4">
      <H2Title text={title} />
      {backLink && (
        <div className="flex items-center justify-end underline">
          <svg
            className="w-3 h-3 mr-1 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <Link href={backLink}>Regresar a la lista</Link>
        </div>
      )}
    </div>
  );
};

export default HeaderComponent;
