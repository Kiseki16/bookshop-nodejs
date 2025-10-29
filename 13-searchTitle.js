// 13-searchTitle.js
const axios = require('axios');

async function searchByTitle(title) {
    try {
        const response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=10');
        const books = response.data.data.filter(b => b.title === title);
        console.log(books.length > 0 ? books : 'No books found with this title');
    } catch (error) {
        console.error(error.message);
    }
}

searchByTitle('The Great Adventure');
