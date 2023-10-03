import  http  from "node:http";
import { Readable, Writable, Transform } from 'node:stream'


class InvertPositiveToNegativeStream extends Transform {
    _transform(chunk, encoding, callback){
        let negativeNumber = Number(chunk.toString()) * -1
        console.log(negativeNumber)

        callback(null, Buffer.from(String(negativeNumber)))
    }
}

const server = http.createServer(async (req, res) => {
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()
    
    console.log(fullStreamContent)
    res.end(fullStreamContent)
    
    // return req
    // .pipe(new InvertPositiveToNegativeStream())
    // .pipe(res)
})

server.listen(3334)