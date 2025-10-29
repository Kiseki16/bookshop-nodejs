// 9-deletereview.js
const axios = require('axios');

async function deleteReview(reviewId) {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${reviewId}`);
        console.log('Review deleted:', response.status);
    } catch (error) {
        console.error(error.message);
    }
}

deleteReview(1);
