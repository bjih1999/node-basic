const util = require('util');

/**
 * deprecated 처리하는 법
 * -> 함수를 util.deprecated로 감싸줌
 */
const func = util.deprecate((x, y) => {
    console.log(x + y);
}, '이 함수는 deprecated 되었습니다.');

func(1, 2);
/*
출력 :
3
(node:3916) DeprecationWarning: 이 함수는 deprecated 되었습니다.
 */