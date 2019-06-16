var global = 'a global variable';
var module1 = function () {
    var test1 = "abc";
    var fn1 = function () {
        console.log('some function');
    };
    console.log(global);
    fn1();
};
var module2 = function () {
    var test2 = "abc";
    var fn2 = function () {
        console.log('some function');
    };
    console.log(global);
    fn2();
};
var module3 = function () {
    var test3 = "abc";
    var fn3 = function () {
        console.log('some function');
    };
    console.log(global);
    fn3();
};
module1();
module2();
module3();

// IIFE - Immediate Invoking Function Expression
// in the above example 'global' variable is referring the window context
// but in the below example when we use iife context scope is limited to the function.

(function (){
    var global = 'a global variable';
    var fn = function () {
        var test = "abc";
        var fn = function () {
            console.log('some function');
        };
        console.log(global);
        fn();
    }
})();

(function () { // this should be the first line of the javascript code

})();

// one more example of a iife 
console.log("######### iife example 2 ###########");
(function (w, a) {
    var test = function () {
        return 'world';
    }
    test();


    console.log('world');
    console.log(a);

    function test1() {
        console.log();
    }
    w.test = test;
})(window, 10);

console.log('calling test from window : ', test());
console.log('calling test1 from window : ', test1());