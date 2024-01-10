"use client";
import { useFormik } from "formik";
import { FC, Fragment } from "react";
import InputBase from "./InputBase";
import { useStore } from "@/store/store";
import { useAlert } from "@/hooks/useAlert";
interface Props {}

const initialValues = {
  name: "",
  manzana: "",
  birthdate: "",
  street: "",
  movilPhone: "",
  civilState: "",
};

const NewPersonForm: FC<Props> = ({}) => {
  const { pushPerson } = useStore();
  const { AlertComponent, setToastControl } = useAlert({
    message: "Se agrego correctamente",
  });
  const { handleSubmit, handleBlur, handleChange, values, setValues } =
    useFormik({
      initialValues,
      onSubmit: (values, actions) => {
        actions.setSubmitting(false);

        fetch("/api/person", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((res) => res.json())
          .then((json) => {
            setToastControl(true);
            pushPerson(json);
            setValues(initialValues);
          })
          .catch((err) => console.log(err));
      },
    });
  return (
    <Fragment>
      {AlertComponent}
      <form onSubmit={handleSubmit} className="space-y-8" autoComplete="off">
        <InputBase
          label="Nombre Completo"
          type="text"
          name="name"
          value={values.name}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        <div className="grid grid-cols-2 space-x-2 pr-2">
          <InputBase
            label="Manzana"
            type="number"
            name="manzana"
            value={values.manzana}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
          <InputBase
            label="Fecha de Nacimiento"
            type="date"
            name="birthdate"
            value={values.birthdate}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <InputBase
          label="Calle y Número"
          type="text"
          name="street"
          value={values.street}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        <div className="grid grid-cols-2 space-x-2">
          <InputBase
            label="Número Celular"
            type="number"
            name="movilPhone"
            value={values.movilPhone}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />

          <div>
            <label
              htmlFor="civilState"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Estado Civil
            </label>
            <select
              id="civilState"
              name="civilState"
              value={values.civilState}
              onBlur={handleBlur}
              onChange={handleChange}
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            >
              <option value="" defaultChecked>
                Selecciona una opción
              </option>
              <option value="Soltero/a.">Soltero/a.</option>
              <option value="Casado/a.">Casado/a.</option>
              <option value="Unión libre">Unión libre</option>
              <option value="Separado/a.">Separado/a.</option>
              <option value="Divorciado/a.">Divorciado/a.</option>
              <option value="Viudo/a.">Viudo/a.</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
        >
          Registrar Persona
        </button>
      </form>
    </Fragment>
  );
};

export default NewPersonForm;
