const GenericResponse = require("../dto/GenericResponse.js");
const FriendService = require("../services/FriendService");

module.exports = {

    GetAllFriendsOfUser: async(req,res)=>
    {
        return FriendService.GetAllFriendsOfUser(req,res);
    }
}