import CollectorsList from "@/components/forms/CollectorsList";
import NewCollectorForm from "@/components/forms/NewCollectorForm";
import HeaderComponent from "@/components/header/Header";
import { Fragment } from "react";

export default async function RecolectorsPage() {
  return (
    <Fragment>
      <HeaderComponent title="Lista de Recolectores" backLink="/lista" />
      <NewCollectorForm />
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-base text-left text-gray-800 ">
          <thead className="text-base text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-2 border text-center w-10">
                {" "}
              </th>
              <th scope="col" className="p-2 border text-center w-16">
                No.
              </th>
              <th scope="col" className="p-2 border">
                Nombre
              </th>
            </tr>
          </thead>
          <tbody>
            <CollectorsList />
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
