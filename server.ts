// required file
const server = require("./app");
const dotenv = require("dotenv");

// port
const PORT = process.env.PORT || 8080;

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
