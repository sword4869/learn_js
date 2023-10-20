// + - * / **幂
const age = 1 + 2 * 3 - 2 ** 2 / 2;
age++;
age--;
age += 2;



// `typeof` operator in /varialbe/datatype.js


// comparison operator
const flag = 1 > 2 || 2 < 1 || 1 == 2 || 2 <= 1 || 1 >= 2;



// Equality operators: == , ===
// == : loose equality operator, has type coercion
const flag_true = ('18' == 18);
// ===: strict equality operator, no type coercion
const flag_false = ('18' === 18);
// so it is better to use ===.


// Different operator: != , !==
const flag_true_different = ('18' != 18);
const flag_false_different = ('18' !== 18);




// logic operator
const flag2 = true && false;
const flag3 = true || false;
const flag4 = !true;


// conditional(ternary) operator
// As long as it is an expression
// no return
1 < 2 ? console.log(1) : console.log(2);
// use return
const n = 1 < 2 ? '1' : '2';
// Can be used with ``
const string10 = `age : ${1 > 2 ? 18 : 20}`;

