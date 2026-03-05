const { Router } = require("express");
const newMessageController = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter.get("/", newMessageController.newMessageForm);

newMessageRouter.post(
  "/",
  newMessageController.validatePost,
  newMessageController.newMessagePost
);

module.exports = newMessageRouter;
