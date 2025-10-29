const axios = require('axios');

async function getAllBooks() {
    try {
        const response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5');
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getAllBooks();
