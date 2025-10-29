// 4-getbooksbytitle.js
const axios = require('axios');

async function getBooksByTitle(title) {
    try {
        const response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=10');
        const books = response.data.data.filter(b => b.title === title);
        console.log(books.length > 0 ? books : 'No books found with this title');
    } catch (error) {
        console.error(error.message);
    }
}

// Replace with a title from the API
getBooksByTitle('The Great Adventure');
