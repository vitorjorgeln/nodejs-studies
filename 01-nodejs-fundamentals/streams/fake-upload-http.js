import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
    _read() {
        let i = this.index++
        setTimeout(() => {
            if (i > 5) {
                this.push(null)
            } else {
                let buffer = Buffer.from(String(i))
                this.push(buffer)
            }
        }, 1000);
    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    body: new OneToHundredStream(),
    duplex: 'half'
}).then(response => {
    return response.text()
}).then(data => {
    console.log(data)
})