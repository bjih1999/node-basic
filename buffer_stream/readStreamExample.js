const fs = require('fs');

const readStream = fs.createReadStream('.\\readme3.txt', {highWaterMark: 16});

/**
 * stream 장점
 * - 메모리를 절약할 수 있다.
 *  why? 버퍼를 10M로 만든다고 했을 때, 이 동작을 100명이 동시에 수행한다고 하면
 *       10*100 = 1GB의 메모리가 소비됌
 */
let data = [];
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data : ', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end : ', Buffer.concat(data).toString());

});

readStream.on('error', (err) => {
    console.log('error', err);
});

