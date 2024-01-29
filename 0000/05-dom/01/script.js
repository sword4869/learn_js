'use strict';

/**
 * select element
 */
// 1. querySelector: 
//      return the first element in the list of matched.
//      `.` for class, `#` for id.
//    querySelectorAll:
//      return all matched elements
const pEl = document.querySelector('.firstClass');
const inputEl = document.querySelector('#text1');
const pEls = document.querySelectorAll('.firstClass');

// 2. getElementById：单个元素
//      return the element with the specified ID, or null if no matching element is found.
//      getElementById'effect is as same as querySelector's effect, butgetElementById is faster than querySelector. 
//    getElementsByClassName/getElementsByName/getElementsByTagName/getElementsByTagNameNS: 多个元素
//      return a HTMLCollection, which is an array-like object.
const btn1El = document.getElementById('btn1');    // no '#'
const btns = document.getElementsByClassName('btn');
const btns2 = document.getElementsByTagName('button');
const btns3 = document.getElementsByName('button');
const btns4 = document.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'button');




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

