/**
 * 아래 4개는 모두 같은 폼
 */

// 함수 기본형
function add1(x, y) {
    return x + y;
}

// 화살표 함수로 변수에 객체(함수)를 할당
const add2 = (x, y) => {
    return x + y;
}

// 수식 하나로 리턴할 수 있는 경우 return 생략 가능
const add3 = (x, y) => x + y;

/* add3보다 추천하는 방법*/
// return을 생략할 수 있지만 가독성이 떨어지기 때문에 리턴 값을 괄호로 묶어줌
const add4 = (x, y) => (x + y);

/* 주의할 점*/

// 화살표 함수의 수식을 감쌀 때 중괄호를 사용하는 경우
// JS 엔진이 객체인지 함수인지 판단할 수 없기 때문에 화살표 함수의 수식은 반드시 소괄호로 묶어주어야 함

let obj = (x, y) => {x, y};
console.log(obj(1, 2)); // undefined

obj = (x, y) => ({x, y});
console.log(obj(1, 2)); // {x:1, y:2}

/**
 * 기존 function()과 화살표 함수가 다른점
 *      -> 기존 function()의 this는 본인이 포함된 객체를 가리키지만, 화살표 함수의 this는 상위 스코프의 this를 가리킨다!!
 *      즉, 화살표 함수가 기존 function()을 대체하는 것은 아니다!
 *
 *      주의할 점) function() 의 this는 global을 가리킴, 이것은 callback에서도 동일하게 적용됨
 *      단, 메소드(객체에 포함된 함수)의 this는 해당 객체를 가리킴
 *
 * 추천하는 방법
 * 1) 최대한 this 사용을 피한다
 * 2) this가 꼭 필요한 경우 function()을 사용한다.
 * 3) this가 필요하지 않은 경우 화살표 함수를 사용한다.
 * */

const relationship1 = {
    name:'jih',
    friends: ['1', '2', '3'],
    logFriends: function () {
        const that = this;  //that = this = relationship
        this.friends.forEach(function (friend) {
            //이 범위에서의 this는 global
            console.log(this);
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();
console.log();

const relationship2 = {
    name:'jih',
    friends: ['1', '2', '3'],
    logFriends: function() {
        this.friends.forEach((friend) => {
            //이 범위에서의 this = 호출하는 범위의 this = relationship2
            console.log(this);
            console.log(this.name, friend);
        });
    },
};

relationship2.logFriends();