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