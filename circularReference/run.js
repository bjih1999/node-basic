const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();
/**
 * node에서의 순환 참조
 *
 * Spring과 다르게 순환 참조를 한다고 해서 runtime error가 발생하지는 않음
 * 참조를 하는 과정에서 순환 참조가 발생하면, 참조하는 객체를 빈 객체로 처리하고 실행함
 *
 * 예를 들어 위의 출력 결과의 경우
 *
 * {}   //  dep1 -> dep2 -> dep1 (순환참조) => dep1를 빈 객체 처리
 * [Function]   // dep2 -> dep1 (위 코드에서 dep1의 모듈이 만들어졌기 때문에 dep1 참조 가능) => 함수 객체 출력
 * running dep1 // dep1()
 * running dep2 // dep2()
 */