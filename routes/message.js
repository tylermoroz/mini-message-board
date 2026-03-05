const { Router } = require("express");
const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:id", messageController.getMessageDetailsById);
messageRouter.post("/:id/delete", messageController.deleteMessagePost);

module.exports = messageRouter;
