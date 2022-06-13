let fetchUserButton = document.getElementById("fetch-user")
let showProfesionalesCont = document.getElementById("show-users")
const getMarksFromUserId = async () =>{
    while (showProfesionalesCont.firstChild) {
        showProfesionalesCont.firstChild.remove()
    }
    let studentId = document.getElementById("student-id").value
    if(!studentId) return showToast("Necesitas un id del estudiante valido!")
    let url = `http://127.0.0.1:3000/notas/${studentId}`
    try {
        let rawResponse = await (await fetch(url)).json()
        console.log(rawResponse)
        if(rawResponse.error) return showToast(rawResponse.error)
        if(rawResponse){
            let htmlMarks = `
            <table class="table table-dark" id="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Estudiante Id</th>
                    <th scope="col">Subject Id</th>
                    <th scope="col">fecha</th>
                    <th scope="col">Mark</th>
                </tr>
            </thead>
            </table>
            `
            showProfesionalesCont.insertAdjacentHTML('afterbegin', htmlMarks)
            rawResponse.forEach(mark =>{
                html = `
                <tbody>
                    <tr>
                        <td>${mark.mark_id}</td>
                        <td>${mark.student_id}</td>
                        <td>${mark.subject_id}</td>
                        <td>${mark.date}</td>
                        <td>${mark.mark}</td>
                    </tr>
                </tbody>
            `
            table.insertAdjacentHTML('beforeend', html)
            })
        }
    } catch (error) {
        
    }
}
fetchUserButton.addEventListener("click", getMarksFromUserId)

let createMark = document.getElementById("create-user")
createMark.addEventListener("click", postUser)
async function postUser()
{
    let studentId = document.getElementById("student-id").value
    let subjectId = document.getElementById("subject-id").value
    let mark = document.getElementById("mark").value
    let student = {
        studentId:studentId,
        subjectId:subjectId,
        mark:mark
    }
    const url = 'http://127.0.0.1:3000/notas';
    if(validar(student)){
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(student),
                method: "POST"
            }
        let rawResponse = await (await fetch(url, param)).json()
        console.log(rawResponse)
        if(rawResponse.error) return showToast(rawResponse.error)
        showToast(rawResponse)
    }
}
const updateUserBtn = document.getElementById("update")
updateUserBtn.addEventListener("click", putUser)

async function putUser() {
    let id = document.getElementById("mark-id").value
    if(!id) return showToast("Necesitas un id para actualizar la nota")
    let mark = document.getElementById("mark").value
    let subjectId = document.getElementById("subject-id").value
    let student = {
        id:id,
        mark:mark || null,
        subjectId:subjectId || null
    }
    const url = `http://127.0.0.1:3000/notas/`;
    let param = 
        {
            headers: {"Content-type": "application/json; charset= UTF-8"},
            body: JSON.stringify(student),
            method: "PUT"
        }

    let raw = await fetch(url, param)
    let response = await raw.json()
    console.log(response)
    showToast(response.error || response.response)
};

const deleteUserBtn = document.getElementById("delete")
deleteUserBtn.addEventListener("click", deleteUser)
async function deleteUser(){
    let id = document.getElementById("mark-id").value
    if(!id){
        return showToast("Error, no id found")
    }
    const url = `http://127.0.0.1:3000/notas`;
    let raw = await fetch(url, {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify({id:id}),
        method: "DELETE"
    })
    let response = await raw.json()
    console.log(response)
    showToast(response.error || response.message)
}

function validar(student)
{
    resultado = false
    if (student.studentId == "" || student.studentId == "null")
    {
        showToast("AVISO: Dato no introducido: studentId")
    }
    else if (student.subjectId == "" || student.subjectId == "null")
    {
        showToast(`AVISO: Dato no introducido: subjectId`)
    }
    else if (student.mark == "" || student.mark == "null")
    {
        showToast("AVISO: Dato no introducido: mark")
    }
    else{
        resultado = true;
    }
    return resultado;
};

function showToast(message)
{
    document.getElementById("toastText").innerText=message;
}; 