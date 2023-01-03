const express = require("express");
const router = express.Router();
const FriendController = require("../controllers/FriendController");

router.get("/all-friends/of-user/:user",FriendController.GetAllFriendsOfUser);

module.exports = router;