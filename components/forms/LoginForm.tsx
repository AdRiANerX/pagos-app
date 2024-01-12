"use client";
import { FC } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/store";
interface Props {}

const LoginForm: FC<Props> = ({}) => {
  const { push } = useRouter();
  const { setSession } = useStore();
  const { values, handleBlur, handleChange, handleSubmit, setValues } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values, actions) => {
        actions.setSubmitting(false);

        fetch("/api/user", {
          method: "PUT",
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then(() => {
            setSession(true);
            setValues({
              username: "",
              password: "",
            });
          })
          .catch((err) => console.log(err))
          .finally(() => {
            setTimeout(() => {
              push("/lista");
            }, 1500);
          });
      },
    });

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          id="username"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Nombre Usuario
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="Escribe aquí"
          required
        />
      </div>
      <div>
        <label
          id="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          required
        />
      </div>

      <button
        type="submit"
        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
