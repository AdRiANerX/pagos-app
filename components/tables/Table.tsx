import { FC, Fragment } from "react";
import Accordion from "../accordion/Accordion";
interface Props {}

const Table: FC<Props> = () => {
  const data = [
    {
      id: 1,
      manzana: "1",
      name: "Rosa MAria",
      birthdate: "15/Junio/1992",
      street: "Cholula 25",
      movilPhone: "2223762256",
      civilState: "Unión Libre",
      abonos: [
        {
          date: "01/Enero/2024",
          quantity: 150,
          nameOfCollector: "Silvio Rodriguez",
        },
      ],
    },
  ];

  return (
    <Fragment>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-lg text-left text-gray-900">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300">
            <tr className="border">
              <th scope="col" className="border p-2">
                Manzana
              </th>
              <th scope="col" className="border p-2">
                Nombre y Dirección
              </th>
              <th scope="col" className="border p-2 w-20">
                Ver Más
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border font-medium">
              <td className="text-center border">M1</td>
              <td className="p-2">
                <p>Rosa Maria Patricia Velazquez Ramirez</p>
                <p>Calle: Cholula 25</p>
              </td>
              <td className="border">
                <button
                  type="button"
                  className="flex items-center justify-center w-full"
                >
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="bg-gray-100 border">
              <td colSpan={3}>
                <Accordion display data={{}} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Table;
