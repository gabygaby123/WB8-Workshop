class ToDoService{
    baseUrl = "http://localhost:8083/api/users"
}

    // GET
//async  getAll(){
    return fetch(this.baseUrl).then(response => response.json())
//}