console.log('welcome to javascript!');

var a = 10;
window.a = 10;
console.log(10);

// setTimeout
var timeout = setTimeout(function() {
    console.log(a);
}, 3000);

var timer = setInterval(function() {
    console.log('hi');
}, 1000);

setTimeout(function() {
    clearInterval(timer);
    clearTimeout(timeout);
}, 10000);
