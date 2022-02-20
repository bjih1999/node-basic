/**
 * 옛날 클래스 상속 문법
 */

// 생성자로 사용가능
let OldHuman = function(type) {
    this.type = type || `human`;
};

// 객체명.메소드명 -> static 메소드
OldHuman.isHuman = function(oldHuman) {
    return oldHuman.type === `human`;
};

// 객체명.prototype.메소드명 -> instance 메소드
OldHuman.prototype.breathe = function () {
    console.log(`h-a-a-a-m`);
};

/**
 * apply
 * 특정 객체의 함수를 빌려와 첫번째 인자로 주어진 객체 내부에서 실행하는 것
 *
 * 궁금증) 부모의 생성자의 인자는 type이고 자식의 생성자의 인자는 type, firstName, listName인데
 *          이것을 arguments로 받아서 부모.apply(this, arguments)로 하면 arguments의 어떤 값이 부모 생성자 메소드에 전달이 되는가
 * A) 순서대로 들어가서 선착순으로 짤린다.
 *
 * arguments
 * 함수에 전달된 인자들을 "유사 배열"의 형태로 받아오는 변수
 * 함수의 원형에 매개변수가 정의되어 있지 않은 경우에도 arguments를 통해 인자를 받아올 수 있다.
 */
let OldJih = function( type, firstName, lastName) {
    OldHuman.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

OldJih.prototype = Object.create(OldHuman.prototype);
OldJih.prototype.constructor = OldJih;
OldJih.prototype.sayName = function() {
    alert(`${this.firstName} ${this.lastName}`);
};

const oldJih = new OldJih('human', 'jih', 'b');
console.log(OldHuman.isHuman(oldJih));


/**
 * 최신 클래스 상속 문법
 */
class NewHuman {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        return human.type === 'human';
    }

    breathe() {
        console.log('h-a-a-a-m');
    }
}

class NewJih extends NewHuman {
    constructor(type = 'human', firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const newJih = new NewJih('human', 'jih', 'B');
newJih.sayName();