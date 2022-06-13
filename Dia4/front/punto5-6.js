let averageButton = document.getElementById("average")
let showProfesionalesCont = document.getElementById("show-users")
const getAverageMarksFromUserId = async () =>{
    while (showProfesionalesCont.firstChild) {
        showProfesionalesCont.firstChild.remove()
    }
    let studentId = document.getElementById("id").value
    if(!studentId) return showToast("Necesitas un id del estudiante valido!")
    let url = `http://127.0.0.1:3000/media/${studentId}`
    try {
        let rawResponse = await (await fetch(url)).json()
        console.log(rawResponse)
        showToast(rawResponse.error || rawResponse.average)
    } catch (error) {
        console.log(error)
    }
}
averageButton.addEventListener("click", getAverageMarksFromUserId)

let pointedButton = document.getElementById("pointed")
const getSubjectsFromStudents = async () =>{
    while (showProfesionalesCont.firstChild) {
        showProfesionalesCont.firstChild.remove()
    }
    let studentId = document.getElementById("id").value
    if(studentId){
        let url = `http://127.0.0.1:3000/apuntadas/${studentId}`
        try {
            let rawResponse = await (await fetch(url)).json()
            console.log(rawResponse)
            showToast(rawResponse.error || "")
            if(!rawResponse.error){
                let html = `
                <table class="table table-dark" id="table">
                <thead>
                    <tr>
                        <th scope="col">Subject id</th>
                        <th scope="col">Subject</th>
                        <th scope="col">User id</th>
                    </tr>
                </thead>
                </table>
                `
                showProfesionalesCont.insertAdjacentHTML('afterbegin', html)
                rawResponse.forEach(subject =>{
                    html = `
                    <tbody>
                        <tr>
                            <td>${subject.id}</td>
                            <td>${subject.subject}</td>
                            <td>${studentId}</td>
                        </tr>
                    </tbody>
                `
                table.insertAdjacentHTML('beforeend', html)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }else{
        let url = `http://127.0.0.1:3000/apuntadas/`
        try {
            let rawResponse = await (await fetch(url)).json()
            showToast(rawResponse.error || "")
            if(!rawResponse.error){
                let html = `
                <table class="table table-dark" id="table">
                <thead>
                    <tr>
                        <th scope="col">Subject id</th>
                        <th scope="col">SubjectName</th>
                        <th scope="col">userName</th>
                        <th scope="col">LastName</th>
                    </tr>
                </thead>
                </table>
                `
                showProfesionalesCont.insertAdjacentHTML('afterbegin', html)
                rawResponse.forEach(usersWithSubjects =>{
                    html = `
                    <tbody>
                        <tr>
                            <td>${usersWithSubjects.subjectId}</td>
                            <td>${usersWithSubjects.subjectName}</td>
                            <td>${usersWithSubjects.userName}</td>
                            <td>${usersWithSubjects.LastName}</td>
                        </tr>
                    </tbody>
                `
                table.insertAdjacentHTML('beforeend', html)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

}
pointedButton.addEventListener("click", getSubjectsFromStudents)

let givenButton = document.getElementById("given")
const getTeachers = async () =>{
    while (showProfesionalesCont.firstChild) {
        showProfesionalesCont.firstChild.remove()
    }
    let teacherId = document.getElementById("id").value
    if(teacherId){
        let url = `http://127.0.0.1:3000/impartidas/${teacherId}`
        let rawResponse = await (await fetch(url)).json()
        console.log(rawResponse)
        if(rawResponse.error) return showToast(rawResponse.error)
        showToast("")
        let html = `
        <table class="table table-dark" id="table">
        <thead>
            <tr>
                <th scope="col">Teacher Id</th>
                <th scope="col">Subject id</th>
                <th scope="col">SubjectName</th>
            </tr>
        </thead>
        </table>
        `
        showProfesionalesCont.insertAdjacentHTML('afterbegin', html)
        rawResponse.forEach(subject =>{
            html = `
            <tbody>
                <tr>
                    <td>${teacherId}</td>
                    <td>${subject.subject_id}</td>
                    <td>${subject.subject_name}</td>
                </tr>
            </tbody>
        `
        table.insertAdjacentHTML('beforeend', html)
        })
    }else{
        let url = `http://127.0.0.1:3000/impartidas`
        let rawResponse = await (await fetch(url)).json()
        console.log(rawResponse)
        if(rawResponse.error) return showToast(rawResponse.error)
        showToast("")
        let html = `
        <table class="table table-dark" id="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Last name</th>
                <th scope="col">Subject Name</th>
            </tr>
        </thead>
        </table>
        `
        showProfesionalesCont.insertAdjacentHTML('afterbegin', html)
        rawResponse.forEach(teacher =>{
            html = `
            <tbody>
                <tr>
                    <td>${teacher.first_name}</td>
                    <td>${teacher.last_name}</td>
                    <td>${teacher.subjectName}</td>
                </tr>
            </tbody>
        `
        table.insertAdjacentHTML('beforeend', html)
        })
    }
}   
givenButton.addEventListener("click", getTeachers)

function showToast(message)
{
    document.getElementById("toastText").innerText=message;
}; 