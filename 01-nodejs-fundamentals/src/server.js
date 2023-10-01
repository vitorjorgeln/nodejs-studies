import http from 'node:http'

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        let body
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        req.body = null
    }
    

    if (method == 'GET' && url == '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        const { name, email, age } = req.body

        users.push({
            id: 1,
            name,
            email,
            age
        })
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Method or route not found.')
})
//localhost:3333
server.listen(3333)