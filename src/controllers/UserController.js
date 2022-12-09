const UserService = require("../services/UserService")
const GenericResponse = require("../dto/GenericResponse.js");

module.exports = {
    SaveUser: async(req,res)=>
    {
        
        const data = UserService.SaveUser(req,res);
        const response= new GenericResponse("Data sended",data);
        return res.send(response);
    
    },


    


};