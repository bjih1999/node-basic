const dep1 = require('./dep1');

console.log(dep1);

module.exports = () => {
    console.log('running dep2');
}