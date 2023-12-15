// newtodo.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('addTodoForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const task = document.getElementById('task').value;
        const user = document.getElementById('user').value;

        // Send a POST request to add a new ToDo task
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                task: task,
                user: user,
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
              
            })
            .catch(error => console.error('Error adding ToDo task:', error));
    });
});
