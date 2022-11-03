const axios = require('axios');

const promise = axios.get('http://localhost:3000/hi');
promise.then((resp: any) => {

    console.log(resp.data);
});
