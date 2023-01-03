const mysql=require("mysql");
const mySqlConnnection = mysql.createConnection({
    host : 'node-js-aws-rds.ciqmjhvfx2pw.ap-northeast-1.rds.amazonaws.com',
    port : '3306',
    user : 'afshal',
    password : 'afshal123.',
    database : 'chatapp',
    charset: 'utf8mb4'

    

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


