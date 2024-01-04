import NewPersonForm from "@/components/forms/NewPersonForm";
import HeaderComponent from "@/components/header/Header";

export default function NewPersonPage() {
  return (
    <div className="py-8 lg:py-16 px-4">
      <HeaderComponent title="Agregar Nueva Persona" backLink="/lista" />
      <NewPersonForm />
    </div>
  );
}
