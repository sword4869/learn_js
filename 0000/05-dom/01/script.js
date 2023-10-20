'use strict';

/**
 * select element
 */
// querySelector: `.` for class, `#` for id.
// just return the first element in the list of matched.
const pEl = document.querySelector('.firstClass');

// return all matched elements
const pEls = document.querySelectorAll('.firstClass');

const inputEl = document.querySelector('#text1');

// getElementById'effect is as same as querySelector's effect.
// getElementById is faster than querySelector. 
const btn1El = document.getElementById('btn1');    // no '#'
const btn2El = document.querySelector('#btn2');
const btn3El = document.querySelector('#btn3');




/**
 * get content of element 
 */
// textContent: generally
console.log(pEl.textContent); // 30
console.log(pEls[0].textContent, pEls[1].textContent);
// Note: even it is a number, always return string type.
console.log(typeof pEl.textContent); // string

// value: An input field element's content is not `textContent`, but `value`
console.log(inputEl.value);      // Default value




/** 
 * event Listener 
 */
// first argument: event
// second argument: event handler
btn1El.addEventListener('click', function () {
    // '#60b347' should be inside a string.
    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('body').style.backgroundColor = 'green';
}
)
btn2El.addEventListener('click', function () {
    // '#60b347' should be inside a string.
    document.querySelector('body').style.backgroundColor = ''
}
)

// global event
// listening for events everywhere on the page.
document.addEventListener('keydown', function () {
    console.log('A key is down');
});
document.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key === 'Escape') {
        console.log('we can use ESCAPE to exit');
    }
});



/**
 * classList
 */
const hiddenFuc = function () {
    const flag = pEl.classList.contains('hidden');
    if (flag) pEl.classList.remove('hidden');
    else pEl.classList.add('hidden');
}
btn3El.addEventListener('click', hiddenFuc);

