import { db } from ".";
import { PersonModel } from "../models";
import { IPerson } from "@/interfaces";

export const setPersonToDb = async (person: IPerson) => {
  await db.connect();
  const newPerson = new PersonModel({
    ...person,
    name: person.name.toLowerCase(),
  });
  await newPerson.save({ validateBeforeSave: true });
  await db.disconnect();

  return newPerson;
};

export const updatePersonToDb = async (person: IPerson) => {
  // eslint-disable-next-line no-unused-vars
  const { _id, createdAt, updatedAt, __v, ...rest } = person;
  await db.connect();
  const personUpdated = PersonModel.findOneAndUpdate(
    { _id },
    { ...rest },
    { returnOriginal: false }
  );
  await db.disconnect();

  return personUpdated;
};

export const deletePersonFromDb = async (_id: string) => {
  await db.connect();
  await PersonModel.findOneAndDelete({ _id });
  await db.disconnect();
  return "Eliminado";
};

export const getPeopleFromDb = async () => {
  await db.connect();
  const people = PersonModel.find();
  await db.disconnect();

  return people;
};

export const searchPeopleFromDb = async (query: string) => {
  await db.connect();
  const people = PersonModel.find({ name: query });
  await db.disconnect();

  return people;
};
