const db = require("../db/queries");
const links = require("../links");

function newMessageForm(req, res) {
  res.render("form", { title: "New Message", links: links });
}

async function newMessagePost(req, res) {
  const { username, text } = req.body;
  await db.postMessage(text, username);
  res.redirect("/");
}

module.exports = { newMessageForm, newMessagePost };
