const express = require("express");
const router = express.Router();

// home route
router.get("/", (req, res) => {
  res.status(200).json({
    title: "Home",
    para: "This is Home page",
  });
});

// about route
router.get("/about", (req, res) => {
  res.status(200).json({
    title: "About",
    para: "This is About page",
    path: "/about",
  });
});

// not found route
router.get("*", (req, res) => {
  res.status(200).json({
    title: "404 !!!",
    para: "Page has not found",
  });
});

module.exports = router;
