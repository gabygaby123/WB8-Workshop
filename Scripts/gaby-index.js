let toDoService

document.addEventListener("DOMContentLoaded", () => {
    toDoService = new ToDoService()

    loadToDo()
})

function loadToDo(){
    toDoService.getAll()
                .then(users => {
                    displayUsers(users)
                })
}

function displayUsers(){
    document.getElementById("dropdown").innerHTML = ""
    users.forEach(user => {
        displayUsers(user)
    });
}