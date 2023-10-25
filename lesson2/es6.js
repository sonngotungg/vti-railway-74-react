// 1. Block Scoped (var, const, let)
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

// 2. Arrow function
// Traditional function
function add(a, b) {
    return a + b;
  }
  
// Arrow function
const add = (a, b) => a + b;

// 3. Destructuring Assignments
const person = {
    firstName: 'first name',
    lastName: 'last name'
}
const numbersArray = [0, 1]

const { firstName, lastName } = person;
const [first, second] = numbersArray;

// 4. Default Parameters
function greet(name = 'World') {
    console.log(`Hello, ${name}!`);
}

greet()
greet('Home')

// 5. Rest and Spread Operators
const numbers = [1, 2, 3];
const combined = [...numbers, 4, 5];

const student = {
    id: 1,
    name: 'sample name',
    age: 22
}

// 6. Template String
const name = 'John';
console.log(`Hello, ${name}!`);


// 7. Import
// In one file
export const someFunction = () => {
    // ...
};
  
// In another file
import { someFunction } from './otherFile';