// what is a function ?
// how to define it
// how to execute it
// how to call in diff ways
// arguments in function and how are they diff from JAVA
// scope in function - this is important
// hoisting in functions - this is important
// self invoking functions -- which i also call as IIFE(Immediate invoking function expression)
// closures in function
// recursive mechanism
// this keyword
// to use call(), apply() and bind()
// callbacks


// Function declaration
// function keyword
// name
// arguments
// body
// return value
function test() {
    console.log('inside the test function');
}

test();

// let us write a function to calculate the simple interest
// si = prt/100;
function calculateSI(p, r, t) {
    if (typeof p === 'number' && typeof r === 'number' && typeof t === 'number') {
        var si = (p * r * t)/100;
        return si;
    }
    return 'please send correct arguments';
}

console.log(calculateSI(100, 10, 1));
console.log(calculateSI(100, 10, '1'));
console.log(calculateSI(100));

// let us learn differrent ways to define functions
// 1. without variable;
// 2. with variable
// 3. anonymous

// without variable
function abc() {}

// with variable
var xyz = function() {
    console.log('inside xyz function');
};
xyz();
xyz = 0;

if (typeof xyz === 'function') {
    console.log('xyz is a function');
}

// let us try to understand callbacks
// callback in javascript is a function which you pass it to an another function to be called inside it
function multiply(a, b, c) {
    return a*b*c;
}

function showMessage(value) {
    console.log('si is :', value);
}

function giveMeSI(p, r, t, f) {
    var numerator = multiply(p, r, t);
    var si = numerator/100;
    typeof f === 'function' ? f(si) : console.log('f is not a function');
}

giveMeSI(1000, 10, 2, showMessage);
giveMeSI(1000, 10, 2, 4);

// let us learn about arguments array
// define a method sum which will take any number of arguments and provide me a sum
function sum() {
    console.log(typeof arguments);
    console.log(arguments);
    var sum = 0;
    if (Function.prototype.forEach) {
        arguments.forEach(function(item) {
            sum += item;
        });
    } else {
        var length = arguments.length;
        for (var i = 0; i < length; i++) {
            sum += arguments[i];
        }
    }
    console.log('sum = ', sum);
}
sum(1);
sum(1, 2);
sum(1, 2, 3);

