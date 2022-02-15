/**
 * module.exports를 해준다 -> Spring에서 Bean으로 등록해준다
 * 는 것과 유사한 용도
 *
 * 다른 파일에서 참조할 수 있도록 등록하는 것
 * */

/**
 * require, module.exports -> node 모듈 문법
 * import, export -> javasriprt 모듈 문법
 *
 * 모듈 문법은 node가 먼저 도입한 후 js가 도입함 -> node와 js의 모듈 문법이 분리되는 결과(기존 코드 마이그레이션 이슈)
 * require - import, module.exports - export default와 같은 식으로 "대체"할 수 있지만
 * 서로 완벽하게 대체 되지 않는다! 즉, 조금씩 차이점이 있다.
 *
 * 결론) node면 웬만하면 require, moudule.exports를 사용하자
*/
const odd = '홀수입니다.';
const even = '짝수입니다';

module.exports = {
  odd,
  even,
};

/*
위 코드는
exports.odd = odd;
exports.even = even;
과 동일한 코드
 */

/**
 * module.exports === exports === {} === 빈객체(초기)
 * 단, module.expors에 다른 값을 대입하는 경우 module.exports == exports 간에 참조관계가 끊김
 *  -> exports를 쓸 때에는 exports만 사용하고, module.exports를 쓸 때에는 module.exports만 사용해야함
 *
 *  보통, 2개 이상을 export할 경우 exports.odd = odd;와 같은 식으로 사용하고
 *  1개만 export할 경우 module.export = odd와 같은 식으로 사용함
 */