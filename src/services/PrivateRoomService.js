const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");
const CustomNotFoundException = require("../exceptions/CustomNotFoundException");

// select room_id from private_rooms pr where pr.user_1_id = (select u.user_id from user u where u.email=${emails.firstUserEmail}) or pr.user_1_id =(select u.user_id from user u where u.email=${emails.secondUserEmail}) and pr.user_2_id = (select u.user_id from user u where u.email=${emails.firstUserEmail}) or pr.user_2_id = (select u.user_id from user u where u.email=${emails.secondUserEmail});
module.exports = {

    GetPrivateRoomByEmail: (req, res,next) => {
       
       const emails={
        firstUserEmail: req.params.clickByUserEmail,
        secondUserEmail: req.params.clickOnUserEmail
       }
       
        
        db.query(`SELECT room_id from private_rooms pr where (pr.user_1_id = (select u.user_id from user u where u.email= ? ) or pr.user_1_id =(select u.user_id from user u where u.email= ? )) and (pr.user_2_id = (select u.user_id from user u where u.email= ? ) or pr.user_2_id = (select u.user_id from user u where u.email= ? ));`,[emails.firstUserEmail,emails.secondUserEmail,emails.firstUserEmail,emails.secondUserEmail], (error, result, fields) => {
            if (error) {
                console.log(error);
            }
            else {
                const privateRoomKey = result;
                if(privateRoomKey.length === 0){
                    
                  return next(new CustomNotFoundException("Not Found"));
                }
                return res.send(new GenericResponse(`Private room key for these users: `,privateRoomKey));
            }
        });
    }
}

