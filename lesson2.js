let variableName = 'some value';
const constantName = 'immutable value';
const x = 1
console.log('global scope:', x)
function display() {
    console.log('functional scope:', x)
    const x = 2
    if (x === 2) {
        let x = 3
        console.log('block scope:', x)
    }
}