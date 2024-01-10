"use client";
import { useFormik } from "formik";
import { FC } from "react";
import InputBase from "./InputBase";
import { IPerson } from "@/interfaces";
import { useStore } from "@/store/store";
interface Props {
  person: IPerson;
}

const initialValues = {
  date: "",
  quantity: 0,
  idCollector: "",
};

const NewPayment: FC<Props> = ({ person }) => {
  const { pushPeople, collectors } = useStore();
  const { handleSubmit, handleBlur, handleChange, values, setValues } =
    useFormik({
      initialValues,
      onSubmit: (values, actions) => {
        actions.setSubmitting(false);

        const nameOfCollector = collectors.filter(
          (coll) => coll._id === values.idCollector
        )[0].name;

        const newPerson: IPerson = {
          ...person,
          abonos: [
            ...person.abonos,
            {
              date: values.date,
              idCollector: values.idCollector,
              nameOfCollector,
              quantity: values.quantity,
            },
          ],
        };

        fetch("/api/person", {
          method: "PUT",
          body: JSON.stringify({ person: newPerson }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then(() => {
            fetch("/api/person", {
              method: "GET",
              headers: { "Content-type": "application/json; charset=UTF-8" },
            })
              .then((res) => res.json())
              .then((json) => {
                setValues(initialValues);
                pushPeople(json.data);
              })
              .catch((err) => console.log(err));
          })

          .catch((err) => console.log(err));
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full grid grid-cols-2 md:grid-cols-3">
        <div className="w-30 mx-1">
          <InputBase
            label="Fecha de Cobro"
            type="date"
            name="date"
            value={values.date}
            handleBlur={handleBlur}
            handleChange={handleChange}
            required
          />
        </div>
        <div className="w-30 mx-1">
          <InputBase
            label="Cantidad abonar"
            type="number"
            name="quantity"
            value={values.quantity}
            handleBlur={handleBlur}
            handleChange={handleChange}
            required
          />
        </div>

        <div className="my-2 col-span-2 md:col-span-1">
          <label
            htmlFor="idCollector"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Selecciona el recolector
          </label>
          <select
            id="idCollector"
            name="idCollector"
            value={values.idCollector}
            onBlur={handleBlur}
            onChange={handleChange}
            required
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          >
            <option value="" defaultChecked>
              Selecciona una opción
            </option>
            {collectors.map((coll) => (
              <option key={coll._id} value={coll._id}>
                {coll.name}
              </option>
            ))}
          </select>
        </div>
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
