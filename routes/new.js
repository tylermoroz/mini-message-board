const express = require("express");
const newRouter = express.Router();

newRouter.get("/", (req, res) => {
  res.render("form", { title: "New Message" });
});

module.exports = newRouter;
