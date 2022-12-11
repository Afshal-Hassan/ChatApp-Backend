const res = require("express/lib/response");
const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");
const UserService = require("../services/UserService");

module.exports = {
    
    GetAllFriendsOfUser: (req,res)=>{
        db.query("SELECT user_friend_id from friends f INNER JOIN user u ON u.user_id=f.user_id",async(error,result)=>{
                if(error)
                {
                    console.log(error);
                }
                else
                {
                   const friendList = await UserService.GetUsersDetails(req,res,result);
                   return res.send(new GenericResponse("List of Friends of given user",friendList));
                }
        });
    }
}