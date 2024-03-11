const {Transform, pipeline} = require('stream');
const fs = require("fs");

const resumeTime = 3000
const readable = fs.createReadStream('./my-file.txt', {highWaterMark: 20})

let chunkCount = 0;
readable.on('data', (chunk) => {
    if(chunkCount === 2) {
        readable.pause()
        setTimeout(() => {
            readable.resume()   
        }, resumeTime);
    }
    console.log('new chunk: ' + chunk.toString())
    chunkCount++
})

const writable = fs.createWriteStream('./my-file-1.txt')

const uppercase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
})

pipeline(readable, uppercase, writable, (err) => {
    if(err) console.error(err)
})