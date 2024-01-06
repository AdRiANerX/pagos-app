"use client";
import { FC, Fragment, useEffect } from "react";
import { useStore } from "@/store/store";
// import { ICollector } from "@/interfaces";
interface Props {}

const CollectorsList: FC<Props> = ({}) => {
  const { collectors, pushCollectors, deleteCollector } = useStore(
    (state) => state
  );

  const handleDeleteCollector = (_id: string) => {
    fetch("/api", {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(() => deleteCollector(_id))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("/api", {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        pushCollectors(json.data);
      })
      .catch((err) => console.log(err));
  }, [pushCollectors]);

  return (
    <Fragment>
      {collectors.length === 0 ? (
        <tr className="bg-white border">
          <td
            colSpan={3}
            className="p-2 border text-center text-lg bg-yellow-200"
          >
            Lista Vacia
          </td>
        </tr>
      ) : (
        collectors.map((item, index) => (
          <tr key={item._id} className="bg-white border">
            <td className="p-2 border">
              <button onClick={() => handleDeleteCollector(item._id!)}>
                <svg
                  fill="#ff0000"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ff0000"
                  className="w-5 h-5"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M16 0c8.844 0 16 7.156 16 16s-7.156 16-16 16-16-7.156-16-16 7.156-16 16-16zM16 30.031c7.719 0 14-6.313 14-14.031s-6.281-14-14-14-14 6.281-14 14 6.281 14.031 14 14.031zM14.906 17h-5.906c-0.563 0-1-0.438-1-1s0.438-1 1-1h14c0.563 0 1 0.438 1 1s-0.438 1-1 1h-8.094z"></path>
                  </g>
                </svg>
              </button>
            </td>
            <td className="p-2 border text-center">{index + 1}</td>
            <td className="p-2">{item.name}</td>
          </tr>
        ))
      )}
    </Fragment>
  );
};

export default CollectorsList;
