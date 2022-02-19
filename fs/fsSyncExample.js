const fs = require('fs');

/**
 * readFileSync
 * - 파일을 읽는 동작을 동기적으로 실행
 * - 포그라운드에서 동기적으로 실행하기 때문에 시간 낭비 가능성이 높음
 *  => promise 처리 : 1.499ms, sync 처리 : 16.572ms
 */

console.time('readFileSync');
let data = fs.readFileSync('.\\readme.txt');
console.log('1번', data.toString());

data = fs.readFileSync('.\\readme.txt');
console.log('2번', data.toString());

data = fs.readFileSync('.\\readme.txt');
console.log('3번', data.toString());

data = fs.readFileSync('.\\readme.txt');
console.log('4번', data.toString());

console.timeEnd('readFileSync');
