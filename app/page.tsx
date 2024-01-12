import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";

export default function HomePAge() {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900">
          <Image
            alt="Logo"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            width={100}
            height={100}
            className="w-8 h-8 object-cover"
          />
          <span>Sistema de Pagos</span>
          <span>San Diego Cuachayotla</span>
          <span>Recaudación Panteon</span>
        </div>
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Ingresar
            </h1>

            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
