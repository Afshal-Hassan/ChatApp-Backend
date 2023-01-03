const res = require("express/lib/response");
const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");


module.exports = {
    SaveMessages: (data) => {
        
        db.query("INSERT INTO messages(message_sent_user_id,message_receive_user_id,messages) values((select user_id from user where email = ?), (select user_id from user where email = ?),?)",[data.messageSender,data.messageReceiver,data.message] , async (error, result, fields) => {
            if (error) {
                return error;
            }
            else
            {
                return res.send(new GenericResponse("Data sended",null));
            }
        })
    },

    GetMessages: (req,res) => {
        const clickByUserEmail = req.params.clickByUserEmail;
        const clickOnUserEmail = req.params.clickOnUserEmail;

        db.query("select * from messages msg inner join user u on u.user_id = msg.message_sent_user_id where (msg.message_sent_user_id = (select user_id from user where email = ?) and msg.message_receive_user_id =(select user_id from user where email = ?)) or (msg.message_sent_user_id = (select user_id from user where email = ? ) and msg.message_receive_user_id =(select user_id from user where email = ?)) order by message_id asc" , [clickByUserEmail,clickOnUserEmail,clickOnUserEmail,clickByUserEmail] ,async (error, result, fields) => {
            if (error) {
                return error;
            } 
            else
            {
                return res.send(new GenericResponse(`Data according to sender email: ${clickByUserEmail} and receiver email: ${clickOnUserEmail} `,result));

            }
        })

    }


};