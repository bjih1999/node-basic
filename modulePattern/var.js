/**
 * module.exports를 해준다 -> Spring에서 Bean으로 등록해준다
 * 는 것과 유사한 용도
 *
 * 다른 파일에서 참조할 수 있도록 등록하는 것것 */
const odd = '홀수입니다.';
const even = '짝수입니다';

module.exports = {
  odd,
  even,
};