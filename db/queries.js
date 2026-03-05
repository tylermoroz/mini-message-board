const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function postMessage(text, username) {
  await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
    text,
    username,
  ]);
}

async function getMessageDetails(id) {
  const {
    rows: [message],
  } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return message;
}

async function deleteMessage(id) {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}

module.exports = { getMessages, postMessage, getMessageDetails, deleteMessage };
