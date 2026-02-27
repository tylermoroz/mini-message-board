const db = require("../db/queries");
const links = require("../links");

async function displayMessagesGet(req, res) {
  const messages = await db.getMessages();
  res.render("index", {
    title: "Mini Messageboard",
    messages,
    links: links,
  });
}

module.exports = { displayMessagesGet };
