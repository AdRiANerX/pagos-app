"use client";
import { useFormik } from "formik";
import { FC, Fragment } from "react";
import InputBase from "./InputBase";
interface Props {}

const NewPayment: FC<Props> = ({}) => {
  const { handleSubmit, handleBlur, handleChange, values } = useFormik({
    initialValues: {
      date: "2024-01-01",
      quantity: 150,
      nameOfCollector: "Silvio Rodriguez",
    },
    onSubmit: (values, actions) => {
      console.log("🚀 ~ file: NewPerson.tsx:18 ~ values:", values);
      actions.setSubmitting(false);
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
        />
        <InputBase
          label="Cantidad abonar"
          type="number"
          name="quantity"
          value={values.quantity}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        <InputBase
          label="¿Quién recolecta?"
          type="text"
          name="nameOfCollector"
          value={values.nameOfCollector}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </div>
      <button className="w-full text-white mt-4 bg-green-700 hover:bg-green-800 me-2 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">
        Cargar Abono
      </button>
    </form>
  );
};

export default NewPayment;
