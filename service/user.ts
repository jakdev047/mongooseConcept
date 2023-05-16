import User, { IUser } from "../models/user";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  // creating a new user
  const user = new User(payload);

  // saving the user
  await user.save();

  return user;
};
