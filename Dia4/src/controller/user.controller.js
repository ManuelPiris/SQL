const connection = require("../database")
const getStart = (req,res) =>{
    res.render('students')
}
// estudiantes
const getStudents = (req,res) =>{
    connection.query('SELECT * FROM students', (err,result) =>{
        res.send(result)
    })
}
const getStudentById = (req,res) =>{
    let id = req.params.id;
    connection.query(`SELECT * FROM students WHERE student_id = '${id}'`, (err,result) =>{
        if(err) return res.json(err)
        if(result.length == 0) return res.json({err:"Al parecer no existe este usuario"})
        res.send(result)
    })
}
const saveUserToDatabase = (req,res) =>{
    let student = req.body
    if(student.name == null) return res.json("There is a problem with the post request")
    sql = `INSERT INTO students (fisrt_name, last_name,group_id, anyo_ingreso)
     VALUES ('${student.name}', '${student.lastName}', '${student.group}', '${student.year}')`
    connection.query(sql, (err,result)=>{
        if(err) return res.json({error:err})
        res.json({response: `${student.name} Bienvenido a este mundo`})
    })
}
const updateUserFromDatabase = (req,res) =>{
    let student = req.body
    let sql =  `UPDATE students SET
                fisrt_name = COALESCE(?, fisrt_name),
                last_name = COALESCE(?, last_name),
                group_id = COALESCE(?, group_id),
                anyo_ingreso = COALESCE(?, group_id)
                WHERE student_id = '${student.id}'`

    connection.query(sql,[student.name, student.lastName, student.group, student.year],(err, result)=>{
        if(err) return res.json({error:err.code})
        if(!result.affectedRows) return res.json({error:'Este usuario no existe'})
        res.json({response: `El usuario con el ${student.id} ha sido actualizado.`})
    })
}

const deleteStudentFromDatabase = (req,res) =>{
    let id = req.body
    let sql =  `DELETE FROM students WHERE student_id = '${id.id}'`
    connection.query(sql, (err,response)=>{
        if(err) return res.json({error:err})
        if(!response.affectedRows) return res.json({error:'Este usuario no existe'})
        res.json({message:`Una pena que el usuario ${id.id} se haya ido.`})
    })
}

//notas
const getMarksFromUserId = async (req,res) =>{
    let stundentId = req.params.id
    let sql =  `SELECT * FROM students WHERE student_id = '${stundentId}'`
    let user = new Promise((resolve,reject)=>{
        connection.query(sql, (err,response)=>{
            if(err) return res.json({error:err})
            if(response.length == 0) return res.json({error:"Al parecer no existe este usuario"})
            resolve(true)
        })
    })
    if(await user){
        let sqlNotas = `SELECT * FROM marks WHERE student_id = '${stundentId}'`
        connection.query(sqlNotas, (err,response)=>{
            if(err) return res.json({error:err})
            if(response.length == 0) return res.json({error:"Al parecer este usuario no tiene notas"})
            res.json(response)
        })
    }
}
const saveMarkToUserFromId = (req,res) =>{
    let markDetails = req.body
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = yyyy + '/' + mm + '/' + dd;
    if(markDetails.studentId == null) return res.json("There is a problem with the post request")
    sql = `INSERT INTO marks (student_id, subject_id,mark, date)
     VALUES ('${markDetails.studentId}', '${markDetails.subjectId}', '${markDetails.mark}', '${today}')`
    connection.query(sql, (err,response) =>{
        if(err) return res.json({error:'Ha habido un problema con la creacion de tu nota'})
        res.json('Nota agregado con exito')
    })
}
const updateMarkFromUserId = (req,res)=>{
    let updateContent = req.body
    let sql =  `UPDATE marks SET
                student_id = COALESCE(?, student_id),
                subject_id = COALESCE(?, subject_id),
                mark = COALESCE(?, mark)
                WHERE mark_id = '${updateContent.id}'`

    connection.query(sql,[updateContent.student_id, updateContent.subjectId, updateContent.mark],(err, result)=>{
        if(err) return res.json({error:err.code})
        if(!result.affectedRows) return res.json({error:'Esta nota no existe'})
        res.json({response: `La nota con el id: ${updateContent.id} ha sido actualizado.`})
    })
}
const deleteMarkFromUserId = (req,res) =>{
    let id = req.body.id
    let sql =  `DELETE FROM marks WHERE mark_id = '${id}'`
    connection.query(sql, (err,response)=>{
        if(err) return res.json({error:err})
        if(!response.affectedRows) return res.json({error:'Este nota no existe'})
        res.json({message:`Una pena que esta nota con el id: ${id} se haya ido.`})
    })
}

// punto5-6
const getUserAverageMarksFromId = async (req,res) =>{
    let response;
    let stundentId = req.params.id
    let sql =  `SELECT * FROM students WHERE student_id = '${stundentId}'`
    let user = new Promise((resolve,reject)=>{
        connection.query(sql, (err,response)=>{
            if(err) return res.json({error:err})
            if(response.length == 0) return res.json({error:"Al parecer no existe este usuario"})
            resolve(true)
        })
    })
    if(await user){
        let sqlNotas = `SELECT * FROM marks WHERE student_id = '${stundentId}'`
        response = new Promise((resolve,reject)=>{
            connection.query(sqlNotas, (err,response)=>{
                if(err) return res.json({error:err})
                if(response.length == 0) return res.json({error:"Al parecer este usuario no tiene notas"})
                resolve(response)
            })
        })
    }
    response = await response
    let notas = []
    response.forEach(mark =>{
        notas.push(mark.mark)
    })
    let average = notas.reduce((previousValue, currentValue) => previousValue + currentValue,0) / notas.length;
    res.json({average: `Su nota media es: ${average}`})
    return notas
}

const getSubjectsFromStudentId = async (req,res) =>{
    let stundentId = req.params.id
    let sql =  `SELECT * FROM students WHERE student_id = '${stundentId}'`
    let user = new Promise((resolve,reject)=>{
        connection.query(sql, (err,response)=>{
            if(err) return res.json({error:err})
            if(response.length == 0) return res.json({error:"Al parecer no existe este usuario"})
            resolve(true)
        })
    })
    if(await user){
        let sqlNotas = `SELECT * FROM marks WHERE student_id = '${stundentId}'`
        response = new Promise((resolve,reject)=>{
            connection.query(sqlNotas, (err,response)=>{
                if(err) return res.json({error:err})
                if(response.length == 0) return res.json({error:"Al parecer este usuario no tiene notas"})
                resolve(response)
            })
        })
        response = await response
        let subjectsId = []
        response.forEach(el =>{
            subjectsId.push(el.subject_id)
        })
        let subjects = []
        let sqlSubjects = `SELECT * FROM subjects`
        connection.query(sqlSubjects, (err, response)=>{
            if(err) return res.json({error:err})
            subjectsId.forEach(id =>{
                response.forEach(sqlId =>{
                    if (id == sqlId.subject_id){
                        subjects.push({subject:sqlId.title,id:id})
                    }
                })
            })
            res.json(subjects)
        })
    }
}

const getSubjectsFromStudents = async (req,res) =>{
    let sqlMarks = `SELECT * FROM marks`
    response = new Promise((resolve)=>{
        connection.query(sqlMarks, (err,response)=>{
            if(err) return res.json({error:err})
            resolve(response)
        })
    })
    response = await response
    let usersSubjects = [] 
    response.forEach(mark =>{
        usersSubjects.push({
            userId:mark.student_id,
            subjectId:[mark.subject_id]
        })
    })

    let sqlSubjects = `SELECT * FROM subjects` 
    let subjectsId = new Promise((resolve,reject)=>{
        connection.query(sqlSubjects, (err, response)=>{
            if(err) return res.json({error:err})
            resolve(response)
        })
    })
    subjectsId = await subjectsId
    usersSubjects.forEach(subject => { 
        subjectsId.forEach(id => {
            if(subject.subjectId == id.subject_id){
                subject.subjectName = id.title
            }
        });
    });
    let sqlUsers = 'SELECT * FROM students'
    let users = new Promise((resolve,reject)=>{
        connection.query(sqlUsers, (err, response)=>{
            if(err) return res.json({error:err})
            resolve(response)
        })
    })
    users = await users
    usersSubjects.forEach(subject => {
        users.forEach(user => {
            if(subject.userId == user.student_id){
                subject.userName = user.fisrt_name
                subject.LastName = user.last_name
            }
        });
    });
    res.json(usersSubjects)
}

const getTeachersFromId = async (req,res) =>{
    let teacherId = req.params.id
    let sql =  `SELECT * FROM teachers WHERE teacher_id = '${teacherId}'`
    let user = new Promise((resolve,reject)=>{
        connection.query(sql, (err,response)=>{
            if(err) return res.json({error:err})
            if(response.length == 0) return res.json({error:"Al parecer no existe este usuario"})
            resolve(true)
        })
    })
    user = await user
    let sqlNotas = `SELECT subject_id FROM subject_teacher WHERE teacher_id = '${teacherId}'`
    let teacherSubjects = new Promise((resolve,reject)=>{
        connection.query(sqlNotas, (err,response)=>{
            if(err) return res.json({error:err})
            if(response.length == 0) return res.json({error:"Al parecer este profesor no imparte asignaturas"})
            resolve(response)
        })
    })
    teacherSubjects = await teacherSubjects
    let sqlSubjects = `SELECT * FROM subjects`
    connection.query(sqlSubjects, (err, response)=>{
        if(err) return res.json({error:err})
        response.forEach(subject =>{
            teacherSubjects.forEach(teacher =>{
                if(subject.subject_id == teacher.subject_id){
                    teacher.subject_name = subject.title
                }
            })
        })
        res.json(teacherSubjects)
    })
}
const getTeachers = async (req,res) =>{
    let sqlTeachers = `SELECT * FROM teachers` 
    response = new Promise((resolve)=>{
        connection.query(sqlTeachers, (err,response)=>{
            if(err) return res.json({error:err})
            resolve(response)
        })
    })
    response = await response

    let sqlSubjects = `SELECT * FROM subjects` 
    let subjectsId = new Promise((resolve,reject)=>{
        connection.query(sqlSubjects, (err, response)=>{
            if(err) return res.json({error:err})
            resolve(response)
        })
    })
    subjectsId = await subjectsId
    response.forEach(teacher => { 
        subjectsId.forEach(id => {
            if(teacher.teacher_id == id.subject_id){
                teacher.subjectName = id.title
            }
        });
    });
    res.json(response)
}
module.exports = {getStart, getStudents, getStudentById, saveUserToDatabase, updateUserFromDatabase, deleteStudentFromDatabase,
    getMarksFromUserId, saveMarkToUserFromId,updateMarkFromUserId,deleteMarkFromUserId,
    getUserAverageMarksFromId, getSubjectsFromStudentId, getSubjectsFromStudents, getTeachersFromId,getTeachers
}