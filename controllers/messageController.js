const db = require("../db/queries");
const links = require("../links");

async function getMessageDetailsById(req, res) {
  const { id } = req.params;
  const message = await db.getMessageDetails(id);

  if (!message) {
    return res.status(404).send("Message Not Found");
  }

  res.render("message", {
    title: "Message Details",
    message,
    links: links,
  });
}

async function deleteMessagePost(req, res) {
  const { id } = req.params;
  await db.deleteMessage(id);
  res.redirect("/");
}

module.exports = { getMessageDetailsById, deleteMessagePost };
