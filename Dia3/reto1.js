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
// obtenemos los nombres completos y asignaturas apuntados
// let params = ["o.student_id","r.student_id","r.subject_id","p.subject_id"]
// let sql = `SELECT o.fisrt_name, o.last_name, p.title FROM students AS o
//            JOIN marks AS r ON (? = ?)
//            JOIN subjects AS p ON (?= ?)`
// connection.query(sql,params,function (err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Nombre, Apellidos y Nombre Asignatura Apuntados:");
//     }
// });

//obtenemos nombres completos y nombres asignaturas imparten
// let params = ["r.teacher_id","t.teacher_id","t.teacher_id","s.subject_id"]
// let sql = `SELECT r.first_name, r.last_name, s.title FROM teachers AS r
//            JOIN subject_teacher AS t ON (? = ?)
//            JOIN subjects AS s ON (? = ?)`
// connection.query(sql,params,function (err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Nombre, Apellidos Profesores y Asignatura Impartida:");
//     }
// });

//total alumnos asignatura y profesor(reto3)

// let sql = `SELECT first_name , last_name , subjects.title , student_id  FROM teachers AS profesor  
//            JOIN subject_teacher AS profesores ON (profesor .teacher_id = profesores.subject_id)
//            JOIN subjects AS id ON (profesores.subject_id = id.subject_id) 
//            JOIN marks AS asignatura ON (asignatura.student_id )GROUP BY profesores.subject_id`
// connection.query(sql,params,function (err, result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor:");
//     }
// });
