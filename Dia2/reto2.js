//realizamos llamada a la mysql y a nuestro servidor local.

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

//obten el id y la nota de los alumnos que tengan un id entre 1 y 20..
// let sql = "SELECT student_id , mark FROM marks WHERE student_id BETWEEN 1 AND 20 OR mark > 8 AND date LIKE '%2021%' ";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else
//     {
//     console.log("Datos:");
//     console.log(result);
//     }
// });

//obten la media de las notas que se han dado en el ultimo año por asignatura.
// let sql = "SELECT AVG (mark) FROM marks WHERE date LIKE '%2022%' GROUP BY subject_id;"
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else
//     {
//     console.log("Nota Media: ");
//     console.log(result);
//     }
// });

//obten la media aritmetica de las notas dadas en el ultimo año por alumno.
// let sql = "SELECT AVG (mark) AS promedio FROM marks WHERE date LIKE '%2022%' GROUP BY student_id";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else
//     {
//     console.log("Media Aritmetica: ");
//     console.log(result);
//     }
// });