const PrivateRoomService = require("../services/PrivateRoomService");

module.exports={

    GetPrivateRoomByEmail: async(req,res,next)=>{
            PrivateRoomService.GetPrivateRoomByEmail(req,res,next);
    }
}