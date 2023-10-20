// 3 methods to define/declare a variable : let const var

// let
// 修饰变量
let age = 10;
age = 20;


// const
// 修饰常量
const birthYear = 2000;
// 且不能为空
// const birthMonth;
// 可以经由变量，可以通过动态输入。也就是说，必须初始化，但可以是动态初始化。
const ageNextYear = age + 1;
const agePreviousYear = prompt('in html page');


// var
// the old way of defining variables
// var is similar with let. PS: For scope chain, const and let are block-scoped while var is function-scoped.
var job = 'hr';
job = 'writer';


// without define/declare a variable. It is actually the property of global.
address = 'Earth';