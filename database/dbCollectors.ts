import { db } from ".";
import { CollectorModel } from "../models";

export const setCollectorToDb = async (name: string) => {
  await db.connect();
  const newCollector = new CollectorModel({ name });
  await newCollector.save({ validateBeforeSave: true });
  await db.disconnect();

  return newCollector;
};

export const getCollectorsFromDb = async () => {
  await db.connect();
  const collectors = await CollectorModel.find();
  await db.disconnect();

  return collectors;
};

export const deleteCollectorsFromDb = async (_id: string) => {
  await db.connect();
  await CollectorModel.findOneAndDelete({ _id });
  await db.disconnect();

  return;
};
