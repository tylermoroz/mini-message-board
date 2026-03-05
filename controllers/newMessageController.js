const db = require("../db/queries");
const links = require("../links");
const { body, validationResult, matchedData } = require("express-validator");

const validatePost = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username cannot be empty")
    .bail()
    .matches(/^[a-zA-Z0-9_-]+$/)
    .withMessage(
      "Username must only contain letters, numbers, underscores, and dashes."
    )
    .isLength({ min: 3, max: 50 })
    .withMessage("Username must be 3-50 characters long."),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("Message cannot be empty.")
    .bail()
    .isLength({ max: 255 })
    .withMessage("Message must be less than 255 characters."),
];

function newMessageForm(req, res) {
  res.render("form", { title: "New Message", links: links });
}

async function newMessagePost(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("form", {
      title: "New Message",
      links: links,
      errors: errors.array(),
    });
  }
  const { username, text } = matchedData(req);
  await db.postMessage(text, username);
  res.redirect("/");
}

module.exports = { newMessageForm, validatePost, newMessagePost };
