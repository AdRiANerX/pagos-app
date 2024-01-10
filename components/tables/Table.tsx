import { FC, Fragment } from "react";
import PeopleList from "./PeopleList";
interface Props {}

const Table: FC<Props> = () => {
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
            <PeopleList />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Table;
