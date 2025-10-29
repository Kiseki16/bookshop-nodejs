// 12-searchAuthor.js
const axios = require('axios');

async function searchByAuthor(author) {
    try {
        const response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=10');
        const books = response.data.data.filter(b => b.author === author);
        console.log(books.length > 0 ? books : 'No books found for this author');
    } catch (error) {
        console.error(error.message);
    }
}

searchByAuthor('John Doe');
