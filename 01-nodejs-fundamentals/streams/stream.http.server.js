import  http  from "node:http";
import { Readable, Writable, Transform } from 'node:stream'


class InvertPositiveToNegativeStream extends Transform {
    _transform(chunk, encoding, callback){
        let negativeNumber = Number(chunk.toString()) * -1
        console.log(negativeNumber)

        callback(null, Buffer.from(String(negativeNumber)))
    }
}

const server = http.createServer((req, res) => {
    return req.pipe(new InvertPositiveToNegativeStream())
    .pipe(res)
})

server.listen(3334)