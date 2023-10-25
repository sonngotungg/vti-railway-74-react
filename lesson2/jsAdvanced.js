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
/// synchronous
const syncFunc = () => {
    console.log('1')
    console.log('2')
    console.log('3')
}

const asyncFunc = () => {
    // callback concept
    setTimeout(() => console.log('1'), 2000)
    console.log('2')
    console.log('3')
}

// syncFunc()
// asyncFunc()

// Callback
function fetchDataFromServer(callback) {
    setTimeout(() => {
      const data = "Data from the server";
      callback(data);
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      const processedData = data.toUpperCase();
      callback(processedData);
    }, 1000);
  }
  
  function saveDataToFile(data, callback) {
    setTimeout(() => {
      console.log("Data saved to a file:", data);
      callback();
    }, 1000);
  }
  
  fetchDataFromServer((data1) => {
    processData(data1, (processedData1) => {
      saveDataToFile(processedData1, () => {
        // More nested callbacks can make the code hard to read and maintain
      });
    });
  });

// Promise
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const data = "Data from the server";
        resolve(data);
        }, 1000);
    });
}

function usingPromise() {
    fetchDataWithPromise()
    .then((data) => {
        console.log("Using Promise:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

usingPromise();

// async / await
function fetchDataFromServer() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "Data from the server";
        resolve(data);
      }, 1000);
    });
}
  
function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const processedData = data.toUpperCase();
        resolve(processedData);
      }, 1000);
    });
}
  
function saveDataToFile(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data saved to a file:", data);
        resolve();
      }, 1000);
    });
}
  
async function fetchDataAndProcess() {
    try {
      const data = await fetchDataFromServer();
      const processedData = await processData(data);
      await saveDataToFile(processedData);
      console.log("Data processing and saving complete");
    } catch (error) {
      console.error("Error:", error);
    }
}
  
fetchDataAndProcess();

// Promise.all
const promise1 = Promise.resolve('hello world')
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
})

Promise
.all([promise1, promise2, promise3])
.then(values => console.log(values))
.catch(err => console.log(err))