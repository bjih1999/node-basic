/**
 * 옛날 방식의 객체 표현 방법
 */

var sayNode = function() {
    console.log(`Node`);
}

var es = `ES`;

var oldObject = {
    sayJs: function() {
        console.log(`JS`);
    },
    sayNode: sayNode,
};

oldObject[es + 6] = `Fantastic`;
oldObject.sayNode();    // Node
oldObject.sayJs();  // JS
console.log(oldObject.ES6); // Fantastic

/**
 * 객체를 표현하는 최신 문법
 */

const newObject = {
    // 객체의 메소드에 function()을 붙이지 않아도 됨
    sayJs() {
        console.log(`JS`);
    },

    // {sayNode : sayNode}와 같이 key와 value의 이름이 같은 경우 한번만 기입해도 됨
    sayNode,

    //객체 내부에서도 동적속성명 사용 가능
    [es + 6]: `Fantastic`,
};

newObject.sayNode();
newObject.sayJs();
console.log(newObject.ES6);