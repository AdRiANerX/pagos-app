import {
  getPeopleFromDb,
  setPersonToDb,
  updatePersonToDb,
  deletePersonFromDb,
  searchPeopleFromDb,
} from "@/database/dbPersons";

export async function GET() {
  const people = await getPeopleFromDb();
  return Response.json({ data: people });
}

export async function PATCH(request: Request) {
  const { query } = await request.json();
  const people = await searchPeopleFromDb(query);
  return Response.json({ data: people });
}

export async function POST(request: Request) {
  const { name, manzana, birthdate, street, movilPhone, civilState } =
    await request.json();
  const newPerson = await setPersonToDb({
    name,
    manzana,
    birthdate,
    street,
    movilPhone,
    civilState,
    abonos: [],
  });
  return Response.json(newPerson);
}

export async function PUT(request: Request) {
  const { person } = await request.json();
  const newPerson = await updatePersonToDb(person);
  return Response.json(newPerson);
}

export async function DELETE(request: Request) {
  const { _id } = await request.json();
  await deletePersonFromDb(_id);
  return Response.json({ message: "Eliminado" });
}
