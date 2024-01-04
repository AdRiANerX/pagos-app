"use client";
import { FC, Fragment } from "react";
import { useFormik } from "formik";
import InputBase from "./InputBase";
interface Props {}

const NewCollectorForm: FC<Props> = ({}) => {
  const { handleSubmit, handleBlur, handleChange, values } = useFormik({
    initialValues: {
      name: "Silvio Rodriguez",
    },
    onSubmit: (values, actions) => {
      console.log("🚀 ~ file: NewPerson.tsx:18 ~ values:", values);
      actions.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="mx-4 md:mx-0">
      <div className="w-full inline-flex items-end">
        <InputBase
          label="Nombre completo"
          type="text"
          name="name"
          value={values.name}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        <button
          type="submit"
          className="w-40 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm ml-2 p-2.5 focus:outline-none"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default NewCollectorForm;
