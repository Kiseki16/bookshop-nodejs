// 10-getallbooks-async.js
const axios = require('axios');

function getAllBooksCallback(callback) {
    axios.get('https://fakerapi.it/api/v1/books?_quantity=5')
        .then(response => callback(null, response.data))
        .catch(error => callback(error, null));
}

getAllBooksCallback((err, data) => {
    if (err) console.error(err.message);
    else console.log(data);
});
