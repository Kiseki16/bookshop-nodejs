// 11-searchISBN-promise.js
const axios = require('axios');

function getBookByISBN(isbn) {
    axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
        .then(response => {
            const book = response.data.data.find(b => b.isbn === isbn);
            console.log(book ? book : 'Book not found');
        })
        .catch(error => console.error(error.message));
}

getBookByISBN('978-3-16-148410-0');
