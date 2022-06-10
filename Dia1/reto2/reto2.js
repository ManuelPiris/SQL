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

//creamos los INSERT para todas nuetra tablas

// let sql = "INSERT INTO subjects (title) VALUES (\"javascript\"),(\"typescript\"),(\"html\"),(\"node\"),(\"sql\"),(\"angular\"),(\"python\"),(\"java\"),(\"visual\"),(\"css\")";

// connection.query(sql, function(err,result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Dato Subjects Introducidos");
//         console.log(result);
//     }
// });

// let sql2 = "INSERT INTO groups (name) VALUES (\"grupo1\"),(\"grupo2\"),(\"grupo3\"),(\"grupo4\"),(\"grupo5\"),(\"grupo6\"),(\"grupo7\"),(\"grupo8\"),(\"grupo9\"),(\"grupo10\")";

// connection.query(sql2, function(err,result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Datos Grupo Introducidos");
//         console.log(result);
//     }
// });

// let sql3 = "INSERT INTO teachers (first_name,last_name) VALUES (\"Jose\",\"Perez Calavera\"),(\"Jorge\",\"Manzano Perico\"),(\"Maria\",\"Santa Ana\"),(\"Marta\",\"Marciano Rodrigo\"),(\"Mario\",\"Santiago Leto\"),(\"Alberto\",\"Redondo Klaus\"),(\"Vicente\",\"Abascal Peri\"),(\"Antonio\",\"Padilla Leto\"),(\"Mario\",\"Santiago Leto\"),(\"Carlos\",\"Parrilla Abascal\")";

// connection.query(sql3, function(err,result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Datos Teachers Introducidos");
//         console.log(result);
//     }
// });

// let sql4 = "INSERT INTO students (fisrt_name, last_name, group_id) VALUES (\"Manuel\",\"Piris Casero\", 1),(\"Laura\",\"Loranca Lopez\", 2),(\"Angel Gabriel\",\"Loranca Lopez\", 3),(\"Ana\",\"Fernandez Madrid\", 4),(\"Jorge\",\"Honrubia Palma\", 5),(\"Alvaro\",\"Santos Sevilla\", 6),(\"Emilia\",\"Caceres Peña\", 7),(\"Maria\",\"Perez Casado\", 8),(\"Pedro\",\"Sanchez Loco\", 9),(\"Pablo\",\"Iglesias Coleta\", 10)";

// connection.query(sql4, function(err,result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Datos Students Introducidos");
//         console.log(result);
//     }
// });

// let sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (10, 1, \"2022-6-6\", 7),(11, 2, \"2010-6-1\", 5),(12, 3, \"2010-6-2\", 6),(13, 4, \"2015-6-1\", 9),(14, 5, \"2000-6-2\",10),(15, 6, \"2010-6-1\", 3),(16, 7, \"2000-4-5\", 5),(17, 8, \"2016-1-1\", 6),(18, 9, \"2022-1-1\", 5),(19, 10, \"2018-5-4\", 9)";

// connection.query(sql, function(err,result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Datos Marks Introducidos");
//         console.log(result);
//     }
// });

// let sql = "INSERT INTO subject_teacher (subject_id, teacher_id, group_id) VALUES (1, 2, 3),(4, 5, 6),(7, 8, 9),(10, 1 , 2),(3, 4, 5),(6, 7, 8),(9, 10, 1),(2, 3, 4),(5, 6, 7),(8, 9, 10)";

// connection.query(sql, function(err,result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Datos subject_teacher Introducidos");
//         console.log(result);
//     }
// });

//cambia las notas todas a 0
// let sql = "UPDATE marks SET mark = 0 ";
// connection.query(sql, function(err,result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Notas Actualizadas");
//         console.log(result);
//     }
// });

//obtenemos el nombre y apellidos de estudiantes
// let sql = "SELECT fisrt_name, last_name FROM students";
// connection.query(sql, function(err,result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Datos Mostrados:");
//         console.log(result);
//     }
// });

//obtener todos los datos de los profesores
// let sql = "SELECT * FROM teachers";
// connection.query(sql, function(err,result){
//     if(err)
//     console.log(err);
//     else{
//         console.log("Datos Profesores:");
//         console.log(result);
//     }
// });

//eliminar las notas que tengan mas de 10 años
// let sql = "DELETE FROM marks WHERE date < \"2012-6-6\" ";
// connection.query(sql, function (err,result){
//     if (err)
//         console.log(err);
//         else{
//     console.log("Notas de Mas de 10 años eliminadas.");
//     console.log(result);
//    }
// });

//poner un 5 a quien tenga nota inferior a 5
// let sql = "UPDATE marks SET mark = 5 WHERE mark = 0";
// connection.query(sql, function(err, result){
//     if(err)
//        console.log(err);
//        else{
//     console.log("Notas Modificadas.");
//     console.log(result);
//     }
// });


