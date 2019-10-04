const got = require('got');

const query = new URLSearchParams([['key', 'a'], ['key', 'b']]);

got('http://localhost:9999', {query});

console.log(query.toString());
