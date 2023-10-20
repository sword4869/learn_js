'use strict';

// 3 types : function declaration, function expression , arrow function


/* funtion delaration */
function hello() {
    console.log('hello');
}
hello();

// it IS allowed to call function before the line of declaration
console.log(hello2(1, 1));
function hello2(a, b) {
    console.log('hello2');
    return a + b;
}


/* function expression */
// it is NOT allowed to call function before the line of declaration.
const world = function () {
    console.log('world');
}
world();


const world2 = function (c, d) {
    console.log('world2');
    return `world2 : ${c + d}`;
}
console.log(world2(2, 2));


/* arrow function */
const human = e => `human : ${e}`;
console.log(human(3));


// Wrap multiple parameters with ()
const human2 = (f, g) => {
    // need to write the return keyword
    return `human2 : ${f + g}`;
}
console.log(human2(4, 4));

// it is similar with function expression.
// the difference is that the arrow function cannot get a this keyword.