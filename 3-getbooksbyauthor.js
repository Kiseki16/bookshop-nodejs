// 3-getbooksbyauthor.js
const axios = require('axios');

async function getBooksByAuthor(author) {
    try {
        const response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=10');
        const books = response.data.data.filter(b => b.author === author);
        console.log(books.length > 0 ? books : 'No books found for this author');
    } catch (error) {
        console.error(error.message);
    }
}

// Replace with any author name from the API
getBooksByAuthor('John Doe');
