let toDoService

document.addEventListener("DOMContentLoaded", () => {
    toDoService = new ToDoService()

    loadToDo()
})


function loadToDo(){
    toDoService.getAll()
                .then()
}