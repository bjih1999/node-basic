
/**
 * var는 함수 스코프를 가지며,
 * let, const는 블록 스코프를 가짐
 * -> 다른 언어와 달리 while, if, for 내부에서 사용한 변수가 다른 범위에 영향을 끼침
 * => var를 let과 const로 완벽히 대체하는 것을 권장(var는 완벽하게 let과 const로 대체됨)
 */

if (true) {
    var x = 3;
}

console.log(x);

if (true) {
    const y = 3;
}

// console.log(y);
// 에러 발생(범위 내에 y가 선언되지 않았기 때문)

/**
 * const는 고정된 값을 가지며, let은 가변 값을 가짐
 *
 */

const a = 3;
// a = 6;
// const에 재 할당 불가

/**
 * 하지만 const로 선언된 객체의 경우 내부 값을 변경할 수 있음
 * 추측하건데 객체의 경우 변수에 주소값을 할당하는 것이고, 내부 값을 변경한다고 주소값이 변경되지 않기 때문에 에러가
 * 발생하지 않는 듯
 *
 * 기본 타입은 재 할당 시 값이 변경되기 때문에 재 할당 불가
 */

const b = {name: `jihyun`};
b.name = `jihyun2`;
// 가능

/**
 * TIP : js를 쓰다보면 값을 변경하는 경우가 생각보다 적기 때문에 const로 변수 생성 후
 * 변경이 필요할 대 let으로 변경하는 방법을 추천
 */

/**
 * var대신 let const를 권장하는 이유
 * 1) hoisting
 *      - js의 모든 변수 선언에는 hoisting이 발생함
 *      - 그러나 var의 경우 hoisting 후 undefined로 초기화하여 의도하지 않은 undefined가 출력되는 반면
 *        let, const는 hoisting 이후에도 초기화를 시키지 않아 의도치 않은 시점에 변수에 접근을 하면 에러를 발생시킴으로써,
 *        코드가 의도치 않게 수행되는 상황을 에러를 통해 확인할 수 있다.
 */