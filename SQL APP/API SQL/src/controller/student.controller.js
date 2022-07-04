const { response } = require("express");
const connection = require('../database')
let student=null;

function getStudents(req,res){
    let clase;
    console.log(req.query.student_id)
    if(req.query.student_id != null ){ 
        clase = "SELECT * FROM students WHERE student_id="+ req.query.student_id;
        console.log(clase)
    } else{
        clase = "SELECT * FROM students"
    }
    connection.query(clase,function(error,result){
        if(error){
            console.log(error);
        } else{
            res.send(result)
        }
});
}

function postStudents(req,res){
    let respuesta;
    student=null;
    console.log(req.body)
    let clase= "INSERT INTO students(first_name,last_name,group_id,anyo_ingreso)"+
             "VALUES('"+ req.body.first_name +"','"+ req.body.last_name + "','"+ req.body.group_id +"','"+ req.body.anyo_ingreso +"')";
            console.log(clase);
            connection.query(clase,function(error,result){
            if(error){
                console.log(error);
            } else{
            if(result.insertId)
                    res.send(String(result.insertId))
                else
                    res.send(respuesta)}
            })
}


function putStudents(req,res){
    let clase;
    let student_id = req.body.student_id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name; 
    let group_id = req.body.group_id;   
    let anyo_ingreso = req.body.anyo_ingreso;  
    let params = [student_id,first_name,last_name,group_id,anyo_ingreso]   
    // clase = "UPDATE students SET first_name = COALESCE(?, first_name) ,"+ 
    //             "last_name = COALESCE(?, last_name) ,"+
    //             "group_id = COALESCE(?, group_id) ,"+   
    //             "anyo_ingreso = COALESCE(?, anyo_ingreso) WHERE student_id=?"
        clase = "UPDATE students SET first_name ='" + first_name + "'," + 
                "last_name ='" + last_name +"',"+
                "group_id ='" + group_id + "',"+   
                "anyo_ingreso ='" + anyo_ingreso + "' WHERE student_id=" + student_id
                 console.log(clase);
                 connection.query(clase,params,function(error,result) {
                if (error)
                    console.log(error);
                else{
                    console.log(result);
                if (result.insertId)
                    res.send(String(result.insertId));
                else
                    res.send("-1");
}})};

function deleteStudents(req,res){
    let clase = `DELETE FROM students WHERE student_id= ${req.query.student_id}`
    connection.query(clase,function(error,result){
        if(error){
            console.log(error);
         } else{
            res.send(result)
         }
})};


module.exports = {getStudents,postStudents,putStudents,deleteStudents}