function validar(student)
{
    resultado = false
    if (student.name == "" || student.name == "null")
    {
        showToast("AVISO: Dato no introducido: name")
    }
    else if (student.lastName == "" || student.lastName == "null")
    {
        showToast(`AVISO: Dato no introducido: lastName`)
    }
    else if (student.group == "" || student.group == "null")
    {
        showToast("AVISO: Dato no introducido: group")
    }
    else if (student.year == "" || student.year == "null")
    {
        showToast("AVISO: Dato no introducido: year")
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

let fetchUserButton = document.getElementById("fetch-user")
let showProfesionalesCont = document.getElementById("show-users")
const getProfesionales = async () =>{
    while (showProfesionalesCont.firstChild) {
        showProfesionalesCont.firstChild.remove()
    }
    let id = document.getElementById("id").value
    if(id){
        let url=`http://127.0.0.1:3000/alumnos/${id}`
        try {
            rawResponse = await fetch(url)
            response = await rawResponse.json()
            if(response[0].student_id){
                console.log(response[0].student_id)
                let htmlProfesionales = `
                <table class="table table-dark ps-2 pe-2">
                <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">nombre</th>
                        <th scope="col">apellido</th>
                        <th scope="col">grupo</th>
                        <th scope="col">año ingreso</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${response[0].student_id}</td>
                        <td>${response[0].fisrt_name}</td>
                        <td>${response[0].last_name}</td>
                        <td>${response[0].group_id}</td>
                        <td>${response[0].anyo_ingreso}</td>
                    </tr>
                </tbody>
              </table>
                `
                showProfesionalesCont.insertAdjacentHTML('afterbegin', htmlProfesionales)
            }
            showToast(response.err)
        } catch (error) {
            showToast(response.err)
        }
    }else{
        let url=`http://127.0.0.1:3000/alumnos`
        try {
            rawResponse = await fetch(url)
            response = await rawResponse.json()
            let htmlProfesionales = `
            <table class="table table-dark" id="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">nombre</th>
                    <th scope="col">apellido</th>
                    <th scope="col">grupo</th>
                    <th scope="col">año ingreso</th>
                </tr>
            </thead>
            </table>
            `
            showProfesionalesCont.insertAdjacentHTML('afterbegin', htmlProfesionales)
            if(response){
                console.log("red")
                let table = document.getElementById("table")
            response.forEach(el =>{
                html = `
                <tbody>
                    <tr>
                        <td">${el.student_id}</td>
                        <td>${el.fisrt_name}</td>
                        <td>${el.last_name}</td>
                        <td>${el.group_id}</td>
                        <td>${el.anyo_ingreso}</td>
                    </tr>
                </tbody>
            `
            table.insertAdjacentHTML('beforeend', html)
            })
            }
            showToast(response.mensaje || '')
        } catch (error) {
            alert(error)
        }
    }
}
fetchUserButton.addEventListener("click", getProfesionales)

let createUser = document.getElementById("create-user")
createUser.addEventListener("click", postUser)
function postUser()
{
    let name = document.getElementById("name").value
    let lastName = document.getElementById("last-name").value
    let group = parseInt(document.getElementById("group").value)
    let year = parseInt(document.getElementById("year").value)
    let student = {
        name:name,
        lastName:lastName,
        group:group,
        year:year,
    }
    const url = 'http://127.0.0.1:3000/alumnos';
    if(validar(student)){
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(student),
                method: "POST"
            }
        fetch(url, param)
        .then(function(data)
        {
            return data.json()
        })
        .then(function(result)
        {
        if (result.error)
            showToast("ERROR: " + result.error.code)
        else
            showToast(result.response)
            console.log(result)
        })
        .catch(function(error)
        {
        console.log(error)
        })
    }
}

const updateUserBtn = document.getElementById("update")
updateUserBtn.addEventListener("click", putUser)

async function putUser() {
    let id = document.getElementById("id").value
    if(!id) return showToast("Necesitas un id para actualizar el usuario")

    let name = document.getElementById("name").value
    let lastName = document.getElementById("last-name").value
    let group = parseInt(document.getElementById("group").value)
    let year = parseInt(document.getElementById("year").value)
    let student = {
        name:name || null,
        lastName:lastName || null,
        group:group || null,
        year:year || null,
        id:id
    }

    const url = `http://127.0.0.1:3000/alumnos/`;

    let param = 
        {
            headers: {"Content-type": "application/json; charset= UTF-8"},
            body: JSON.stringify(student),
            method: "PUT"
        }

    let raw = await fetch(url, param)
    let response = await raw.json()
    console.log(response)
    if(response.error){
        showToast(response.error)
    }else{
        showToast(response.response)
    }
};

const deleteUserBtn = document.getElementById("delete")
deleteUserBtn.addEventListener("click", deleteUser)
async function deleteUser(){
    let id = document.getElementById("id").value;
    if(!id){
        return showToast("Error, no id found")
    }
    const url = `http://127.0.0.1:3000/alumnos`;
    let raw = await fetch(url, {
        headers: {"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify({id:id}),
        method: "DELETE"
    })
    let response = await raw.json()
    console.log(response)
    showToast(response.error || response.message)
}
