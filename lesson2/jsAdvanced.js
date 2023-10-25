// Scope
/// closure - just like private in OOP
function outerFunction() {
    const outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Inner function has access to outerVariable
    }

    return innerFunction; // Return the inner function
}

const closure = outerFunction(); // The inner function is assigned to 'closure'
closure(); // When called, it still has access to 'outerVariable'
  
/// hoisting
// 1. Variable hoisting
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

var x;
console.log(x); // Output: undefined
x = 5;
console.log(x); // Output: 5

// 2. Function hoisting
foo(); // Output: "Hello, world!"

function foo() {
  console.log("Hello, world!");
}

// Value & Reference

const x = 1
const copyX = x
console.log({x, copyX})

const person = {
    name: 'A',
    detail: {
        fullName: 'full name'
    }
}
/// reference
const copyPerson = person

/// copy
const copyPerson2 = {
    ...person
}
person.name = 'B'
person.detail.fullName = 'new full name'

console.log(copyPerson)
console.log(copyPerson2)


// Async & Performance