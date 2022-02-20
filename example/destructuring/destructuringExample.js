const example = { a: 123, b: {c: 135, d:146}}

/**
 * 구조 분해 할당
 *
 * 보통 코드를 짜다보면 참조하는 객체의 변수명을 그대로 가져오는 경우가 많음
 *      -> 참조하는 객체의 변수를 변수명까지 그대로 할당 받는 것 -> 구조 분해 할당
 */
const {a, b: {c}} = example;
console.log(a); // 123
console.log(c); // 135

arr = [1, 2, 3, 4, 5];

const [x, y, , , z] = arr;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 5

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};

/**
 * 주의할 점)
 * this가 포함된 메소드는 비구조화 할당, 그냥 할당도 하지 말자
 *
 * Why? this는 함수를 호출할 시점에서 결정되기 때문에 this가 포함된 메소드를 꺼내쓰는 순간
 *      this가 의도하지 않은 객체에 바인딩 될 수 있다.(객체에 바인딩되어야하는데 global에 바인딩 된다거나 하는 등)
 */

const getCandy = candyMachine.getCandy;
console.log(getCandy);
let count = candyMachine.status.count;
console.log(count);