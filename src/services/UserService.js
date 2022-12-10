const res = require("express/lib/response");
const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");
module.exports={

    SaveUser: (req,res)=>
    {
        const data= req.body;
        db.query("INSERT INTO user SET ?", data , async(error,result,fields)=>{
            if(error)
            {
                return error;
            }       
        });
        return data;   
    },

    GetUsersDetails: (req,res,users)=>
    {
        users.map((user)=>{
            db.query(`SELECT * FROM user where user_id=${user.user_friend_id}`,(error,result)=>{
                if(error)
                {
                    console.log(error);
                }
                else
                {
                    return res.send(new GenericResponse("List of Friends of given User",result));
                }
            });
        })
    }
}