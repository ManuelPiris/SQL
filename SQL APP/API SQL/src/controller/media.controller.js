const { response } = require("express");
const connection = require('../database')



function getMedias(req,res){
    let clase;
        clase = "SELECT AVG(mark) AS notaMedia FROM marks WHERE student_id="+req.query.student_id;
        connection.query(clase,function(err,result){
       if (err)
           console.log(err);
       else {
           res.send(result);
           console.log(result)}
})
};

function getApuntadas(req,res){
    let clase;
    if (req.query.student_id !=null){
        clase ='SELECT first_name,last_name,subjects.title AS asignatura FROM students INNER JOIN marks ON (students.student_id = marks.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) WHERE marks.student_id='+ req.query.student_id;
    }else{
        clase = "SELECT first_name,last_name,subjects.title AS asignatura FROM students INNER JOIN marks ON (students.student_id = marks.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id)"
    }
        connection.query(clase,function(err,result){
    if (err)
        console.log(err);
    else{
        res.send(result);
    }
})};

function getImpartidas(req,res){
    let clase;
    if (req.query.teacher_id){
        clase = 'SELECT first_name,last_name,subjects.title AS asignatura FROM teachers INNER JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) WHERE subject_teacher.teacher_id=' + req.query.teacher_id;
    }else{
        clase = "SELECT first_name,last_name,subjects.title AS asignatura FROM teachers INNER JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)"
    }
        connection.query(clase,function(err,result){
    if (err)
        console.log(err);
    else{
        res.send(result)}
})
};

module.exports = {getMedias,getApuntadas,getImpartidas};