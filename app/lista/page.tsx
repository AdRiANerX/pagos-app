import HeaderComponent from "@/components/header/Header";
import Table from "@/components/tables/Table";
import Link from "next/link";

export default function ListaPage() {
  return (
    <div>
      <HeaderComponent backLink="" title="Lista de Abonos" />
      <div className="flex items-center justify-between mx-2 mb-8">
        <div>
          <button className="text-white bg-red-700 hover:bg-red-800 me-2 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
            Salir
          </button>
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

      <form className="mb-2" autoComplete="off">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Buscar
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-2 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Buscar por nombre"
          />
        </div>
      </form>

      <Table />
    </div>
  );
}
