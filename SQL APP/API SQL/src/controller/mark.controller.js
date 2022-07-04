const { response } = require("express");
const connection = require('../database')
// let mark=null;


function getMarks(req,res){
    let clase;
    console.log(req.query.mark_id)
    if(req.query.mark_id){
        clase ="SELECT * FROM marks WHERE mark_id="+ req.query.mark_id;
    }else {
        clase ="SELECT * FROM marks"
    }
    connection.query(clase,function(error,result){
    if(error){
         console.log(error)
    }else{
        res.send(result)
    }
})}

function postMarks(req,res){
    let dato;
    mark = null;
    console.log(req.body);
    let clase = "INSERT INTO marks(student_id,subject_id,date,mark)" +
        "VALUES ('"+ req.body.student_id +"','"+ req.body.subject_id +"','"+ req.body.date +"','"+ req.body.mark +"')";
    console.log(clase)
    connection.query(clase,function(err,result){
        if (err) {
            console.log(err);
        }else{
            console.log(result);
        if (result.insertId)
            res.send(String(result.insertId))
            else
            res.send(dato)
}})
}

function putMarks(req,res){
    let clase;
    let mark_id = req.body.mark_id;
    let student_id = req.body.student_id;
    let subject_id = req.body.subject_id;
    let date = req.body.date;
    let mark = req.body.mark;
    let params = [mark_id,student_id,subject_id,date,mark]
    clase = "UPDATE marks SET student_id ='" + student_id + "'," + 
                "subject_id ='" + subject_id +"',"+
                "date ='" + date + "',"+   
                "mark ='" + mark + "' WHERE mark_id=" + mark_id
        console.log(clase)
        connection.query(clase,params,function (err,result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            if (result.insertId)
                res.send(String(result.insertId))
            else
                res.send(result)
}})
}

function deleteMarks(req,res){
    let dato;
    let clase;
    if (req.query.mark_id != ""){   
        clase = `DELETE FROM marks WHERE mark_id= `+req.query.mark_id    
    connection.query(clase,function(err,result){
        if (err) {
            console.log(err);
        }else{
            console.log(result);
        if (result.insertId)
            res.send(String(result.insertId))
        else
            res.send(dato)}
})}
}

module.exports = {getMarks,postMarks,putMarks,deleteMarks};