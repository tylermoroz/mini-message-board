const express = require("express");
const port = 3000;
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(port, () => {
  console.log(`App listening on PORT: ${port}!`);
});
