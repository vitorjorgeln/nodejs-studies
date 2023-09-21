import http from 'node:http'
const server = http.createServer((req, res) => {
    const { method, url } = req

   if (method == 'GET' && url == '/users'){
    return res.end('GET users')
   }

   if (method == 'POST' && url == '/users'){
    return res.end('CREATE users')
   }

    return res.end('Server is running on port 3333')
})
//localhost:3333
server.listen(3333) 