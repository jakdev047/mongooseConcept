import mongoose, { Schema } from "mongoose";

// interface
interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gender: "male" | "female";
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
}

// schema
const userSchema = new Schema<IUser>({
  id: { type: String, unique: true, required: true },
});
