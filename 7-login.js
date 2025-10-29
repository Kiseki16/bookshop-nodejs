// 7-login.js
const axios = require('axios');

async function loginUser(username, password) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            username,
            password
        });
        console.log('Login response:', response.data);
    } catch (error) {
        console.error(error.message);
    }
}

loginUser('testuser', 'password123');
