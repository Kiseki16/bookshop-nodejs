// 2-getdetailsISBN.js
const axios = require('axios');

// Using a fake ISBN from the faker API
function getBookByISBN(isbn) {
    axios.get(`https://fakerapi.it/api/v1/books?_quantity=5`)
        .then(response => {
            const book = response.data.data.find(b => b.isbn === isbn);
            console.log(book ? book : 'Book not found');
        })
        .catch(error => console.error(error.message));
}

// Replace with any ISBN from the returned list for testing
getBookByISBN('978-3-16-148410-0');
