const db = require("../db/DBConnection");
const GenericResponse = require("../dto/GenericResponse");

module.exports = {
    SaveUser: (req, res) => {
        const data = req.body;
        db.query("INSERT INTO user SET ?", data, async (error, result, fields) => {
            if (error) {
                return error;
            }
        });
        return data;
    },

    GetUsersDetails: (req, res, users) => {
        let friends = [];
        return new Promise((resolve, reject) => {
            for (let i = 0; i < users.length; i++) {
                db.query(
                    `SELECT * FROM user where user_id=${users[i].user_friend_id}`,
                    (error, result) => {
                        if (error) {
                            console.log(error);
                            return reject(error);
                        } else {
                            friends.push(result);
                            if (i == users.length - 1) {
                                return resolve(friends);
                            }
                        }
                    }
                );
            }
        });
    },
};
