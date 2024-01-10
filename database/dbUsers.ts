import bcrypt from "bcryptjs";
import { db } from ".";
import { UserModel } from "@/models";

export const setUserToDb = async (username: string, password: string) => {
  const passEncryp = await bcrypt.hash(password, 10);
  await db.connect();
  const newUser = new UserModel({
    username,
    password: passEncryp,
  });
  await newUser.save({ validateBeforeSave: true });
  await db.disconnect();

  return newUser;
};

export const getUserFromDb = async (username: string, password: string) => {
  await db.connect();
  const user = await UserModel.findOne({ username });
  await db.disconnect();

  if (!user) {
    return null;
  }

  if (!bcrypt.compare(password, user.password)) {
    return null;
  }

  return user;
};
