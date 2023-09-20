import http from 'node:http'

const server = http.createServer ((req,res) => {
    return res.end('Server is running on port 3333')
})
//localhost:3333
server.listen(3333)