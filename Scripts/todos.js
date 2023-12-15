// todos.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch users and populate the dropdown
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            const dropdown = document.getElementById('userDropdown');
            users.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = user.name;
                dropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
document.addEventListener('DOMContentLoaded', async function () {
    const apiUrl = 'http://localhost:8083/api/categories';
    const dropdown = document.getElementById('userDropdown');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id; 
            option.text = item.name; 
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});