import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
    _read() {
        let i = this.index++
        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                let buffer = Buffer.from(String(i))
                this.push(buffer)
            }
        }, 1000);
    }
}

class MultiplyByTenStream extends Writable {

    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

class InvertPositiveToNegativeStream extends Transform {
    _transform(chunk, encoding, callback){
        let negativeNumber = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(negativeNumber)))
    }
}

new OneToHundredStream()
.pipe(new InvertPositiveToNegativeStream())
.pipe(new MultiplyByTenStream())