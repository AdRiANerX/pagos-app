import {
  getCollectorsFromDb,
  setCollectorToDb,
  deleteCollectorsFromDb,
} from "@/database/dbCollectors";

export async function GET() {
  const collectors = await getCollectorsFromDb();
  return Response.json({ data: collectors });
}

export async function POST(request: Request) {
  const { name } = await request.json();
  const newCollector = await setCollectorToDb(name);
  return Response.json(newCollector);
}

export async function DELETE(request: Request) {
  const { _id } = await request.json();
  await deleteCollectorsFromDb(_id);
  return Response.json({ message: "Eliminado" });
}
