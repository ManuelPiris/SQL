//realizamos llamada a la mysql y a nuestro servidor local.

let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
    host : "localhost",
    user: "root",
    password: "Aitana",
    database: "codenotch"
});

//realizamos conexion con la base de datos, para comprobar si conecta solamente.

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexión correcta.");
    }
});
//insertamos un nuevo dato en nuestra tabla seleccionada

let sql = "INSERT INTO alumnos (id_alumnos,nombre,apellidos,edad,email,telefono,direccion,codigopostal ) VALUES (8,\"Pepe\",\"Hernadez Gomez\",\"20\",\"pruebas88@gmail.com\",\"111111111\",\"calle madrid 1\",\"28000\")";
connection.query(sql,function(err,result){

    if(err)
    console.log(err);
    else{
        console.log("Dato Insertado");
        console.log(result);
    }
});


//borramos un dato dado de nuestra tabla

let sql2 = "DELETE FROM alumnos WHERE id_alumnos > 8";
connection.query(sql, function (err,result){
    if (err)
        console.log(err);
        else{
    console.log("Registro Eliminado");
    console.log(result);
   }
});

//Aqui borramos una tabla entera

let sql3 = "DELETE FROM borrar";
connection.query(sql, function(err,result)
{
    if(err)
    console.log(err);
    else{
        console.log("Tabla Borrada");
        console.log(result);
    }
});
