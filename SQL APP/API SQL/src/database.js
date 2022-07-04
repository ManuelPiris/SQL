let mysql = require("mysql2")

let connection = mysql.createConnection(
    {
    host : "localhost",
    user: "root",
    password: "Aitana",
    database: "reto2"
});

//realizamos conexion con la base de datos, para comprobar si conecta solamente.

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexión correcta.");
    }
});
module.exports = connection