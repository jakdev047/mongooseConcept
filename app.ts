// required file
import express, { Application } from "express";
import cors from "cors";

// express instanse create
const app: Application = express();

// middleware
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ============ Route ============= */
import userRoute from "./modules/user/user.routes";
import indexRoute from "./routes/routes";

// user
app.use("/api/v1/user", userRoute);

// base route
app.use(indexRoute);

export default app;
