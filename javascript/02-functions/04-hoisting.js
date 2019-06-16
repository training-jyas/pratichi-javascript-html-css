function run() {
    var x = 123;
    x = 1234;
    console.log(x); // 1234

    console.log('--------run----------');

    console.log(test); // undefined
    var test = 'hello';
    console.log(test); // hello

    printHello(test);
    function printHello(value) {
        console.log(value); // it wont be called
    }

    // printString(test);
    var printString = function (value) {
        console.log(value); // it wont be called
    }

    return 'ok';
}
run();


// Two take aways from this :-
// 1. All the function definition is hoisted to the top of the scope
// 2. All the variable declaration is hoisted to the top of the scope

// above function run will be understood by js compiler as below
console.log('===================================');
function run2() {
    var x;
    var test;
    function printHello(value) {
        console.log(value); // it wont be called
    }
    var printString;
    x = 123;
    x = 1234;
    console.log(x);
    console.log('--------run------------');
    console.log(test);
    test = 'hello';
    console.log(test);
    printHello(test);
    printString(test);
    printString = function (value) {
        console.log(value);
    } 
}
run2();