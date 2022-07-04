class Marks {
    constructor( student_id,subject_id,date,mark){
        this.student_id = student_id;
        this.subject_id = subject_id;
        this.date = date;
        this.mark = mark;    
}}

function look(result) {
    let temporal = "";
    let tabla = `<table>
                <tr>
                <th>Id nota</th> 
                <th>Id estudiante</th>                    
                <th>Id asignatura</th>
                <th>Fecha</th>
                <th>Nota</th>                    
                </tr>`
temporal = temporal + tabla;
    for (let i = 0; i < result.length; i++) {
        temporal += ` <tr>
                <td>${result[i].mark_id}</td>
                <td>${result[i].student_id}</td>
                <td>${result[i].subject_id}</td>
                <td>${result[i].date}</td>                                  
                <td>${result[i].mark}</td>
                </tr>`}
document.getElementById("show-users").innerHTML = temporal + `</table>`
}

function getMarks(){
    let url=`http://localhost:3000/marks`;
    let mark_id = document.getElementById('mark_id').value;
    console.log(mark_id);
    // looks.innerHTML = ""
   if (mark_id !=""){
    url=`http://localhost:3000/marks/?mark_id=${mark_id}`
   }  let param =
        {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
        }
        fetch(url,param)
            .then(function (data) {               
                return data.json()               
            })
            .then(function (result) {
                 look(result);              
            })
            .catch(function (err) {
                console.log(err)
            })
}

function postMarks(){
    let mark = new Marks (
        document.getElementById("student_id").value,
        document.getElementById("subject_id").value,
        document.getElementById("date").value,
        document.getElementById("mark").value,
        )
        let url = 'http://localhost:3000/marks';
        let param = {
            headers: {"Content-type": "application/json; charset = UTF-8"}, 
            body:JSON.stringify(mark),     
            method: "POST"
            }
            fetch(url,param)
            .then(function (data){
                return data.json;
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
})}

function putMarks(){
    let url = "http://localhost:3000/marks";
    let input ={
        mark_id:document.getElementById("mark_id").value,
        student_id:document.getElementById("student_id").value,
        subject_id:document.getElementById("subject_id").value,
        date:document.getElementById("date").value,
        mark:document.getElementById("mark").value
        }
        let param = {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(input),
        method: "PUT"
        }
        fetch(url, param)
            .then(function(data){
            return data.json()
        })
            .then(function (result) {
        if (result.err) {
            showToast("ERROR" + result.mensaje, "bg-danger")
        }else {
            showToast("Usuario modificado correctamente", "bg-success")
            console.log(result);
        }
        })
            .catch(function (err) {
            console.log(err)
})}

function deleteMarks() {
    let mark_id = document.getElementById("mark_id").value;
    let url = `http://localhost:3000/marks/?mark_id=${mark_id}`;
        let param = 
            {
            headers: {"Content-type": "application/json; charset= UTF-8"},
            method: "DELETE"
            }
            console.log(mark_id)
            fetch(url, param)
              .then(function(data){
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }else{
                    showToast("Usuario eliminado", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
})} 

function validar(mark)
        {
        result = false
        if (mark.student_id == '' || mark.student_id == 'null'){
        showToast('Id alumno no encontrado', 'bg-warning')
        }else if (mark.subject_id == '' || mark.subject_id== 'null'){
        showToast('ID asignatura no encontrado', 'bg-warning')
        }else if (mark.date == '' || mark.date == 'null'){
        showToast('Fecha no encontrada', 'bg-warning')
        }else if (mark.mark == '' || mark.mark == 'null'){
        showToast('Nota no encontrada', 'bg-warning')
        }else{
        result = true;
        }
        return result;
}
        
function showToast(message,color){
    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')
    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;
    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}
    
