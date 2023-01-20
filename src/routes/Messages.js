const express = require("express");
const router = express.Router();
const MessageController = require("../controllers/MessageController");
const cacheService = require("express-api-cache");
const cache = cacheService.cache;

router.post("/messages/save",MessageController.SaveMessages);
router.get("/messages/:clickByUserEmail/:clickOnUserEmail",MessageController.GetMessages);

module.exports = router;