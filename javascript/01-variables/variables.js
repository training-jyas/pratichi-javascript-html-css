// 1. String
// 2. Number
// 3. Boolean
// 4. Object

// 5. null
// 6. NaN
// 7. undefined

// a string is anything enclosed within quotes
var str = 'sundayasdfasdfa234324asfasf';
console.log(str);
var num = 1234;
var numstr = '1234';
console.log(num, numstr);
var bool = true;
var bool2 = false;
var boolstr = 'true';
console.log(bool, bool2, boolstr);

var num = 10;
var str = 'hello';
var bool = true;
var obj = {};
var arr = [];
var func = function(){};
var und = undefined;
var nul = null;
var notNum = NaN;
var noval;

console.log(num, typeof num);
console.log(str, typeof(str));
console.log(bool, typeof bool);
console.log(obj, typeof obj);
console.log(arr, typeof arr);
console.log(func, typeof func);
console.log(und, typeof und);
console.log(nul, typeof nul);
console.log(notNum, typeof notNum);
console.log(noval, typeof noval);

// typeof returns me :
// 1. number
// 2. string
// 3. boolean
// 4. object
// 5. function
// 6. undefined

var a = '20';

if (typeof a === 'number') {
    var sum = a + 30;
    console.log('sum1', sum);
}
var sum = a + 30;
console.log('sum2', sum, typeof sum);

// one more usage of typeof

function total() {
    return 10 + 20;
}

function printSum(fn) {
    if (typeof fn === 'function') {
        return fn() + 30;
    }
}

// total = 30;

console.log(printSum(total), typeof printSum(total));

var spa = ' ';

// NaN 
console.log(20 - '30');
console.log('20' - 30);
console.log('20' - '30');
console.log(20 - '30a');
