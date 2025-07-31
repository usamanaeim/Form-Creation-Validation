// Step 1: Define async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 2: Fetch API data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 3: Clear loading message
        dataContainer.innerHTML = '';

        // Step 4: Create and populate user list
        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Step 5: Append to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Step 6: Handle error
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 7: Run on page load
document.addEventListener('DOMContentLoaded', fetchUserData);
