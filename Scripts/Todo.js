
document.addEventListener('DOMContentLoaded', async function () {
    const apiUrl = 'http://localhost:8083/api/categories';
    const dropdown = document.getElementById('dropdown');

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