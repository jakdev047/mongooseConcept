import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  // creating a new user
  const user = new User(payload);

  // saving the user
  await user.save();

  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  // all users
  const users = await User.find();

  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  // get by Id
  const user = await User.findOne({ id: payload });

  return user;
};
