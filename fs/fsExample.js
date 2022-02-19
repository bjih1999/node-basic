const fs = require('fs').promises;

/**
 * 파일을 순서대로 읽기 위해 promise 처리
 * - 백그라운드에서 동기적으로 처리하기 때문에 속도가 더 빠름
 */
async function readText() {
    let data = await fs.readFile('.\\readme.txt');
    console.log('1번', data.toString());

    data = await fs.readFile('.\\readme.txt');
    console.log('2번', data.toString());

    data = await fs.readFile('.\\readme.txt');
    console.log('3번', data.toString());

    data = await fs.readFile('.\\readme.txt');
    console.log('4번', data.toString());
}
console.time('readFile');
readText();
console.timeEnd('readFile');