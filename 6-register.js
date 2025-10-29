// 6-register.js
const axios = require('axios');

// Using a placeholder endpoint (since Faker API doesn’t support users)
async function registerUser(username, password) {
    try {
        // Fake API just echoes what you send
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            username,
            password
        });
        console.log('User registered:', response.data);
    } catch (error) {
        console.error(error.message);
    }
}

registerUser('testuser', 'password123');
