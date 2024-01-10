"use client";
import { useFormik } from "formik";
import { FC, useEffect } from "react";
import InputBase from "./InputBase";
import { IPerson } from "@/interfaces";
import { useStore } from "@/store/store";
interface Props {
  person: IPerson;
}

const NewPayment: FC<Props> = ({ person }) => {
  const { pushPeople, people } = useStore();
  const { handleSubmit, handleBlur, handleChange, values } = useFormik({
    initialValues: {
      date: "",
      quantity: 0,
      nameOfCollector: "",
    },
    onSubmit: (values, actions) => {
      actions.setSubmitting(false);

      const newPerson: IPerson = {
        ...person,
        abonos: [
          ...person.abonos,
          {
            date: values.date,
            idCollector: "123",
            nameOfCollector: values.nameOfCollector,
            quantity: values.quantity,
          },
        ],
      };

      fetch("/api/person", {
        method: "PUT",
        body: JSON.stringify({ person: newPerson }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => {
          fetch("/api/person", {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
            .then((res) => res.json())
            .then((json) => {
              pushPeople(json.data);
            })
            .catch((err) => console.log(err));
        })

        .catch((err) => console.log(err));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full inline-flex items-center">
        <InputBase
          label="Fecha de Cobro"
          type="date"
          name="date"
          value={values.date}
          handleBlur={handleBlur}
          handleChange={handleChange}
          required
        />
        <InputBase
          label="Cantidad abonar"
          type="number"
          name="quantity"
          value={values.quantity}
          handleBlur={handleBlur}
          handleChange={handleChange}
          required
        />
        <InputBase
          label="¿Quién recolecta?"
          type="text"
          name="nameOfCollector"
          value={values.nameOfCollector}
          handleBlur={handleBlur}
          handleChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full text-white mt-4 bg-green-700 hover:bg-green-800 me-2 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
      >
        Cargar Abono
      </button>
    </form>
  );
};

export default NewPayment;
