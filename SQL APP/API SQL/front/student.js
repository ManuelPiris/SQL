class Students {
    constructor(first_name,last_name,group_id,anyo_ingreso){
    // this.student_id = student_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.group_id = group_id;
    this.anyo_ingreso = anyo_ingreso;
}}

function look(result) {
    let temporal = "";
    let tabla = `<table>
                <tr>
                <th>Id estudiante</th>                    
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Grupo estudio</th>                    
                <th>Año Ingreso</th>
                </tr>`
temporal = temporal + tabla;
    for (let i = 0; i < result.length; i++) {
        temporal += ` <tr>
                <td>${result[i].student_id}</td>
                <td>${result[i].first_name}</td>
                <td>${result[i].last_name}</td>
                <td>${result[i].group_id}</td>                                  
                <td>${result[i].anyo_ingreso}</td>
                </tr>`}
document.getElementById("show-users").innerHTML = temporal + `</table>`
}

function getStudents() {
    let url = `http://localhost:3000/students`;
    let looks = document.getElementById('show-users');
    let student_id = document.getElementById('student_id').value;
    // console.log(student_id)
    // let busqueda = "";
    looks.innerHTML = ""
    if (student_id != ""){
        url = `http://localhost:3000/students/?student_id=${student_id}`
        // console.log(url)
    }else{url}
        let param =
        {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
        }
        fetch(url, param)
            .then(function (data){
                // console.log("entrafecth")
                return data.json()
            })
            .then(function (result){
                // look(result);

             if (student_id == ""){
                 for (let i = 0; i < result.length; i++){
                    //for(let j in result){
                    // console.log("entra")
                    looks.innerHTML += `<div>   
                 <tr>              
                 <td><b>Id Estudiante: </b></td>              
                 <td>${result[i].student_id}</td>   
                 </tr>     
                 <tr>      
                 <tr>              
                 <td><b>Nombre: </b></td>              
                 <td>${result[i].first_name}</td>   
                 </tr>           
                 <tr>              
                 <td><b>Apellido: </b></td>              
                 <td>${result[i].last_name}</td>              
                 </tr>  
                 <tr>              
                 <td><b>Año de ingreso: </b></td>              
                 <td>${result[i].anyo_ingreso}</td>         
                 </tr>  
                 <tr>            
                 </tr>            
                 </div>`
                }
                //CUANDO PONGO EL ID SALTA ESTA FUNCION PARA MOSTRARSE EN PANTALLA
                }else{
                    looks.innerHTML = `<div>   
                    <tr>              
                    <td><b>Id Estudiante: </b></td>              
                    <td>${result[0].student_id}</td>   
                    </tr>     
                    <tr>      
                    <tr>              
                    <td><b>Nombre: </b></td>              
                    <td>${result[0].first_name}</td>   
                    </tr>           
                    <tr>              
                    <td><b>Apellido: </b></td>              
                    <td>${result[0].last_name}</td>              
                    </tr>  
                    <tr>              
                    <td><b>Año de ingreso: </b></td>              
                    <td>${result[0].anyo_ingreso}</td>         
                    </tr>  
                    <tr>            
                    </tr>            
                    </div>`
                }
            })
            .catch(function(error)
            {
                console.log(error)
            })
            //looks.innerHTML = "";
}

function postStudents() {
    let student = new Students(
        document.getElementById("first_name").value,
        document.getElementById("last_name").value,
        document.getElementById("group_id").value,
        document.getElementById("anyo_ingreso").value,
    )
    let url = "http://localhost:3000/students"
    if (validar(student)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(student),
            method: "POST"
        }
        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
}}

function putStudents(){
    let url = `http://localhost:3000/students`
    let input = {
        student_id: document.getElementById("student_id").value,
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        group_id: document.getElementById("group_id").value,
        anyo_ingreso: document.getElementById("anyo_ingreso").value  
    }
    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        body: JSON.stringify(input),
        method: "PUT"
    }
    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.err) {
                showToast("ERROR" + result.mensaje, "bg-danger")
            }else{
                showToast("Usuario modificado correctamente", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err) {
            console.log(err)
})}

function deleteStudents(){
    let student_id = document.getElementById("student_id").value ;
    let url =`http://localhost:3000/students/?student_id=${student_id}`;
    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },       
        method: "DELETE"
    }
    console.log(student_id)
    fetch(url, param)
        .then(function (data) {
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

function validar(student){
    result = false;
        if (student.first_name == ''|| student.first_name == 'null') {
            showToast('Campo nombre vacío','bg-warning')
        }else if (student.last_name == ''|| student.last_name == 'null') {
            showToast('Campo apellido vacío','bg-warning')
        } else if (student.group_id == ''|| student.group_id == 'null') {
            showToast('Campo grupo estudio vacío','bg-warning')
        } else if (student.anyo_ingreso == ''|| student.anyo_ingreso == 'null') {
            showToast('Campo año vacío','bg-warning')
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