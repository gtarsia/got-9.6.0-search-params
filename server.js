const http = require('http')

const server = http.createServer(async (req, res) => {
  console.log(req.url)
  res.writeHead(200)
  res.end('')
})

const port = 9999
console.log('listening at 9999')
server.listen(9999)
