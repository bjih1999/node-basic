/**
 * 전역 스코프에서의 this는 module.exports
 */
console.log(this);   // this === module.exports === {}
console.log(this === module.exports);   // true

/**
 * 단, function 내부의 this는 global임
 */
function a() {
    console.log(this === global);
}
a();    // true