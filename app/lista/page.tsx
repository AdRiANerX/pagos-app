import Link from "next/link";
import HeaderComponent from "@/components/header/Header";
import SearchComponent from "@/components/search/Search";
import Table from "@/components/tables/Table";
import ExitButton from "@/components/buttons/ExitButton";

export default function ListaPage() {
  return (
    <div>
      <HeaderComponent backLink="" title="Lista de Abonos" />
      <div className="flex items-center justify-between mx-2 mb-8">
        <div>
          <ExitButton />
          <Link
            href="/recolectores"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          >
            Recolectores
          </Link>
        </div>
        <Link
          href="/nueva-persona"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        >
          Agregar Persona
        </Link>
      </div>

      <SearchComponent />

      <Table />

      <div className="mb-20"></div>
    </div>
  );
}
