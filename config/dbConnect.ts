import mongoose from "mongoose";

export const connectDB = async function () {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log(`Database has running...`);
  } catch (err) {
    console.log(err);
  }
};
