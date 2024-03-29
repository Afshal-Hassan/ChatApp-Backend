const express = require("express");
const router = express.Router();
const PrivateRoomController = require("../controllers/PrivateRoomController");
const cacheService = require("express-api-cache");
const cache = cacheService.cache;

router.get("/private-room/key/:clickByUserEmail/:clickOnUserEmail",PrivateRoomController.GetPrivateRoomByEmail);

module.exports = router;