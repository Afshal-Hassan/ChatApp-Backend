const res = require("express/lib/response");
const db = require("../db/DBConnection");
const UserService = require("../services/UserService");

module.exports = {
    
    GetAllFriendsOfUser: (req,res)=>{
        db.query("SELECT user_friend_id from friends f INNER JOIN user u ON u.user_id=f.user_id", (error,result)=>{
                if(error)
                {
                    console.log(error);
                }
                else
                {
                    UserService.GetUsersDetails(req,res,result);
                }
        });
    }
}