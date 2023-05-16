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
import indexRoute from "./routes/routes";

// base route
app.use(indexRoute);

export default app;
