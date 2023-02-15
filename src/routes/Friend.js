const express = require("express");
const router = express.Router();
const FriendController = require("../controllers/FriendController");
const cacheService = require("express-api-cache");
const cache = cacheService.cache;
router.get("/all-friends/of-user/:user",FriendController.GetAllFriendsOfUser);

module.exports = router;