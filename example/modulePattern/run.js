/**
 * 주의 할 점)
 * 커스텀 모듈의 경우 경로를 확실하게 적어주어야한다. 같은 디렉토리 위치에 있더라도!!
 *      -> 경로를 적어주지 않는 경우 npm에서 모듈을 검색함
 */
const { checkOddOrEven } = require('./func');

console.log(checkOddOrEven(2));