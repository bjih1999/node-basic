const util = require('util');
const crypto = require('crypto');

/**
 * callback을 promise로 바꾸는 법
 *  -> 함수를 util.promisify로 감싼다
 *
 *  단, 콜백이 (data, err) => {} 형식이어야 함
 */
const randomBytePromise = util.promisify(crypto.randomBytes);

randomBytePromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.log(error);
    });