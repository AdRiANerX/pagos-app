"use client";
import { FC, useEffect, useState } from "react";
import NewPayment from "../forms/NewPayment";
import { IPerson } from "@/interfaces";
import { useStore } from "@/store/store";
interface Props {
  person: IPerson;
  _id: string;
}

const Accordion: FC<Props> = ({ person, _id }) => {
  const { people, deletePerson } = useStore();
  const [total, setTotal] = useState(0);

  const handleDeletePerson = () => {
    fetch("/api/person", {
      method: "DELETE",
      body: JSON.stringify({ _id: person._id }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(() => deletePerson(_id))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTotal(0);
    person.abonos.forEach((abono) => {
      setTotal((val) => val + Number(abono.quantity));
    });
  }, [people, person.abonos]);

  return (
    <div id={_id} className="font-medium text-base hidden">
      <div className="flex items-center">
        <button
          onClick={handleDeletePerson}
          type="button"
          className="mx-2 text-white mt-4 bg-red-700 hover:bg-red-800 me-2 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs p-2 focus:outline-none"
        >
          Eliminar a {person.name}
        </button>
      </div>
      <div className="p-2">
        <ul className="">
          <li>
            · Fecha de Nac:
            <span className="font-semibold">{person.birthdate}</span>
          </li>
          <li>
            · Teléfono:{" "}
            <span className="font-semibold">{person.movilPhone}</span>
          </li>
          <li>
            · Estado Civil:
            <span className="font-semibold">{person.civilState}</span>
          </li>
        </ul>
        <p className="my-2 font-bold">Abonos</p>
        <ul className="">
          <li className="my-1 font-bold">· TOTAL - ${total}</li>
          {person.abonos.length === 0 ? (
            <li>Aun no tiene abonos</li>
          ) : (
            <>
              {person.abonos.map((item) => (
                <li key={item._id}>
                  · {item.date} - ${item.quantity} | {item.nameOfCollector}
                </li>
              ))}
            </>
          )}
        </ul>
        <div className="pt-3">
          <p className="my-2 font-bold">Agregar un abono</p>
          <NewPayment person={person} />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
