const axios = require('axios');

axios
  .get(`https://jsonplaceholder.typicode.com/todos`)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(JSON.stringify(res.data, null, 2));
  })
  .catch(error => {
    console.error(error);
  });