const express = require("express");
const port = 3000;
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexRouter);

app.listen(port, () => {
  console.log(`App listening on PORT: ${port}!`);
});
