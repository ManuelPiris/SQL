function look(result) {
    let temporal = "";
    let tabla = `<table>
                <tr>
                <th>Nombre</th>                   
                <th>Apellido</th>
                <th>Asignatura</th>                    
                </tr>`
temporal = temporal + tabla;
    for (let i = 0; i < result.length; i++) {
        temporal += ` <tr>
                <td>${result[i].first_name}</td>
                <td>${result[i].last_name}</td>
                <td>${result[i].asignatura}</td>                       
                </tr>`}
document.getElementById("show-users").innerHTML = temporal + `</table>`
}

function getMedias() {
    let student_id = document.getElementById("student_id").value   
    if (url = `http://localhost:3000/medias?student_id=${student_id}`){
        let resulta = "";
        let param =
        {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
        }
        fetch(url, param)
            .then(function (data) {
                return data.json()
            })            
            .then(function (result) {                               
                if (!result.err) {
                    resulta= document.getElementById("show-users")                  
                        console.log(result)                       
                        resulta.innerHTML = `<div>   
                        <tr>              
                        <td><b>Id Estudiante: </b></td>              
                        <td>${student_id}</td>   
                        </tr>     
                        <tr>      
                        <tr>              
                        <td><b>Nota media: </b></td>              
                        <td>${result[0].notaMedia}</td>   
                        </tr>          
                        </div>` 
                }else{
                    showToast("Error" + result.mensaje, "bg-danger")
                }
            })
            .catch(function (err) {
                console.log(err)
            })
                 }else{
        console.log("error")
}}

function getApuntadas() {
    let url = `http://localhost:3000/apuntadas`;
    let looks = document.getElementById('show-users');
    let student_id = document.getElementById('student_id').value;
    // console.log(student_id)
    // let busqueda = "";
    looks.innerHTML = ""
    if (student_id != ""){
        url = `http://localhost:3000/apuntadas/?student_id=${student_id}`
        // console.log(url)
    }else{url}
    let param =
            {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            method: "GET"
            }
            fetch(url, param)
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



function getImpartidas() {
    let url = `http://localhost:3000/impartidas`;
    let looks = document.getElementById('show-users');
    let teacher_id = document.getElementById('teacher_id').value;
    // console.log(student_id)
    // let busqueda = "";
    looks.innerHTML = ""
    if (student_id != ""){
        url = `http://localhost:3000/impartidas/?teacher_id=${teacher_id}`
        // console.log(url)
    }else{url}
    let param =
            {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            method: "GET"
            }
            fetch(url, param)
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

function showToast(message,color){
    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')
    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;
    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}