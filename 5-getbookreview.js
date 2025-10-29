// 5-getbookreview.js
const axios = require('axios');

async function getBookReview(isbn) {
    try {
        const response = await axios.get('https://fakerapi.it/api/v1/books?_quantity=5');
        const book = response.data.data.find(b => b.isbn === isbn);
        console.log(book ? `Review: ${book.description}` : 'Book not found');
    } catch (error) {
        console.error(error.message);
    }
}

getBookReview('978-3-16-148410-0');
