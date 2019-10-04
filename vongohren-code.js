const got = require('got')

async function run() {
  const api = 'http://localhost:9999'
  const searchParam = new URLSearchParams([['query', 'theStringToSearchFor']])
  console.log(searchParam.toString()); //query=theStringToSearchFor
  const json = await got(`${api}`, {query: searchParam});
}

run()
