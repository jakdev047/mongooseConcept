// required file
const express = require("express");

// express instanse create
const app = express();

// middleware

/* ============ Route ============= */
const indexRoute = require("./routes/routes");

// base route
app.use(indexRoute);

module.exports = app;
