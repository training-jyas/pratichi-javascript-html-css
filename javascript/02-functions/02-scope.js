var a = 10;
console.log(a);
console.log(window.a);

function test() {
    var b = 20;
    console.log('b', b);
    console.log('a', a);
}
test();
window.test();
// console.log('b', b);

console.log('###########################################');
function outer(){
    var c = 30;
    function inner() {
        var d = 40;
        console.log('d', d);
        console.log('c', c);
        console.log('a', a);
    }
    inner();
}
outer();

// do we have a block level scope ? NO
function test() {
    var abc = 40;
    if (true) {
        var def = 50;
    }
    for(var i = 0; i < 2; i++ ) {
        var ghi = 60;
    }
    console.log(abc, def, i, ghi);
}
test();

// try to understand how the scope in ES5 id diff from ES6 - task for you
