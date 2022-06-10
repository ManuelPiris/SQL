//realizamos llamada a la mysql y a nuestro servidor local.

let mysql = require("mysql2")
let connection = mysql.createConnection(
    {
    host : "localhost",
    user: "root",
    password: "Aitana",
    database: "museo"
});

//realizamos conexion con la base de datos, para comprobar si conecta solamente.

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Conexión correcta.");
    }
});


//reto1

let sql = `SELECT duenyo_obras.nombre_obra, duenyo_obras.nombre_dueño, duenyo_obras.apellidos_dueño, 
           duenyo_obras.email_dueño, m.estado_obra, m.ubicacion_obra, m.fecha_devolucion FROM duenyo_obras
           INNER JOIN museo m ON m.obras_id = duenyo_obras.obras_id
           WHERE (m.estado_obra = 'prestado')
           GROUP BY nombre_obra`
connection.query(sql, function(err, result){
    if(err)
    console.log(err);
    else
    {
    console.log("Reto1: ");
    console.log(result);
    }
});

//reto2

let sql2 = `SELECT COUNT(*) AS Total, museo.ubicacion_obra, museo.estado_obra from museo
            GROUP BY museo.ubicacion_obra
            ORDER BY Total DESC`
connection.query(sql2, function(err, result){
    if(err)
    console.log(err);
    else
    {
    console.log("Reto2: ");
    console.log(result);
    }
});