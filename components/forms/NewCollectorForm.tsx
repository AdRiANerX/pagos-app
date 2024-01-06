"use client";
import { FC } from "react";
import { useFormik } from "formik";
import InputBase from "./InputBase";
import { useStore } from "@/store/store";
interface Props {}

const NewCollectorForm: FC<Props> = ({}) => {
  const { collectors, pushCollectors } = useStore();
  const { handleSubmit, handleBlur, handleChange, values, setValues } =
    useFormik({
      initialValues: {
        name: "",
      },
      onSubmit: async (values, actions) => {
        actions.setSubmitting(false);

        fetch("/api", {
          method: "POST",
          body: JSON.stringify({ name: values.name }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((response) => response.json())
          .then((json) => {
            pushCollectors([
              ...collectors,
              {
                _id: json._id,
                name: json.name,
              },
            ]);
            setValues({ name: "" });
          })
          .catch((err) => console.log(err));
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
