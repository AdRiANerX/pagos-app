import { getUserFromDb, setUserToDb } from "@/database/dbUsers";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const newUser = await setUserToDb(username, password);
  return Response.json(newUser);
}

export async function PUT(request: Request) {
  const { username, password } = await request.json();
  const user = await getUserFromDb(username, password);
  if (!user) {
    return Response.json({ message: "Error con el usuario" });
  }
  return Response.json(user);
}
