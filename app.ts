// required file
import express from "express";
import cors from "cors";

// express instanse create
const app = express();

// middleware
app.use(cors());

/* ============ Route ============= */
import indexRoute from "./routes/routes";

// base route
app.use(indexRoute);

export default app;
