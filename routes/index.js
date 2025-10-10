const express = require("express");
const indexRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Game time!",
    user: "Carter",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { messages, title: "Message Board" });
});

indexRouter.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { message, title: "Message Details" });
});

module.exports = indexRouter;
