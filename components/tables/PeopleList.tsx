"use client";
import { FC, Fragment, useEffect } from "react";
import Accordion from "../accordion/Accordion";
import { useStore } from "@/store/store";
interface Props {}

const PeopleList: FC<Props> = ({}) => {
  const { people, pushPeople, pushCollectors } = useStore();

  const handleToggleAccordion = (_id: string) => {
    const element = document.getElementById(_id);
    if (element?.classList.contains("hidden")) {
      element?.classList.remove("hidden");
      element?.classList.add("block");
    } else {
      element?.classList.remove("block");
      element?.classList.add("hidden");
    }
  };

  useEffect(() => {
    fetch("/api/person", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((json) => {
        pushPeople(json.data);
      })
      .catch((err) => console.log(err));

    fetch("/api/collector", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        pushCollectors(json.data);
      })
      .catch((err) => console.log(err));
  }, [pushPeople, pushCollectors]);

  return (
    <Fragment>
      {people.length === 0 ? (
        <tr className="bg-white border">
          <td
            colSpan={3}
            className="p-2 border text-center text-lg bg-yellow-200"
          >
            Lista Vacia
          </td>
        </tr>
      ) : (
        people.map((person) => (
          <Fragment key={person._id}>
            <tr className="bg-gray-100 border font-medium">
              <td className="text-center border w-10">{person.manzana}</td>
              <td
                className="p-2"
                onClick={() => handleToggleAccordion(person._id!)}
              >
                <p>{person.name}</p>
                <p>Calle: {person.street}</p>
              </td>
              <td
                className="border cursor-pointer"
                onClick={() => handleToggleAccordion(person._id!)}
              >
                <div className="flex items-center justify-center w-full">
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
                </div>
              </td>
            </tr>
            <tr className="border">
              <td colSpan={3}>
                <Accordion _id={person._id!} person={person} />
              </td>
            </tr>
          </Fragment>
        ))
      )}
    </Fragment>
  );
};

export default PeopleList;
