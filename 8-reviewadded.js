// 8-reviewadded.js
const axios = require('axios');

async function addReview(isbn, review) {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            isbn,
            review
        });
        console.log('Review added:', response.data);
    } catch (error) {
        console.error(error.message);
    }
}

addReview('978-3-16-148410-0', 'This book is amazing!');
