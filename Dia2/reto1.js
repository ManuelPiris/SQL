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

//calcular nota media de los alumnos de asignatura 1

// let sql = "SELECT AVG(mark) FROM marks WHERE subject_id = 1";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//     console.log("Media en Asignatura 1:");
//     console.log(result);
//     }
// });

//calcular el numero total de alumnos

// let sql = "SELECT COUNT(student_id) FROM students";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//     console.log("Numero Total Alumnos:");
//     console.log(result);
//     }
// });

//listar todos los campos de la tabla group

// let sql = "SELECT * FROM reto2.groups";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//     console.log("Datos Group:");
//     console.log(result);
//     }
// });

//elimina las notas que estan por encima de 5 y son del año pasado

// let sql = "DELETE FROM marks WHERE mark > 5 AND date LIKE \"%2021%\" ";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//     console.log("Datos Eliminados:");
//     console.log(result);
//     }
// });

//obten los datos de los estudiantes de este año en el bootcamp.Añadir campo de año ingreso en estudiantes

// let sql = "INSERT INTO students (anyo_ingreso) VALUES (2022),(2022),(2022),(2020),(2019),(2010),(2019),(2020),(2022),(2018)";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//     console.log("Datos Actualizados:");
//     console.log(result);
//     }
// });

// let sql = "SELECT * FROM students WHERE anyo_ingreso = 2022";
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else{
//     console.log("Datos Actualizados:");
//     console.log(result);
//     }
// });

//Calcular el numero de profesores que hay por cada asignatura

// let sql = "SELECT subject_id, COUNT(teacher_id) AS grupo_profes FROM subject_teacher GROUP BY subject_id;"
// connection.query(sql, function(err, result){
//     if(err)
//     console.log(err);
//     else
//     {
//     console.log("Profesores con asignaturas:");
//     console.log(result);
//     }
// })