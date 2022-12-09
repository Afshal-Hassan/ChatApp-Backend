const mysql=require("mysql");
const mySqlConnnection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root",
    database:"chatapp"
});

mySqlConnnection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("MySQL Database connected");
    }
})

module.exports = mySqlConnnection;

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'


