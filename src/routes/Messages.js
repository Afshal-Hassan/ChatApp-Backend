const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/MessageController");


router.post("/messages/save",MessageController.SaveMessages);
router.get("/messages/:clickByUserEmail/:clickOnUserEmail",MessageController.GetMessages);

module.exports = router;