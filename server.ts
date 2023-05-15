// required file
import server from "./app";
import dotenv from "dotenv";

// port
const PORT: number | string = process.env.PORT || 8080;

// dbConnect
const { connectDB } = require("./config/dbConnect");
dotenv.config({
  path: "config/config.env",
});
connectDB();

// listen
server.listen(PORT, () => {
  console.log(`${PORT} Server is running...`);
});
