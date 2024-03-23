'use strict';

/** 
 * const and let is block-scoped, so we cannot see them outside the if.
 */
if (true) {
    const a = 10;
    let b = 100;
}
// console.log(a, b);


/** 
 * var is function-scoped. This means that the variable does not disappear until the end of the function.
 * But after the function `fun1()` is finished, we can't see it.
 */
if (true) {
    var c = 10;
}
console.log(c);

function fun1() {
    if (true) {
        var d = 10;
    }
}
fun1();
console.log(d);