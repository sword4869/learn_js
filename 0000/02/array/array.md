- [1. 两种构造数组的方式](#1-两种构造数组的方式)
- [2. 索引](#2-索引)
  - [2.1. 通过索引获取元素](#21-通过索引获取元素)
  - [2.2. 查询某个元素的索引](#22-查询某个元素的索引)
- [3. length](#3-length)
- [4. 修改](#4-修改)
- [5. 判断 Array 是否包含某个元素](#5-判断-array-是否包含某个元素)


---
## 1. 两种构造数组的方式

```js
/* 2 types to define array */
// []
const a = [1, 2, 3];

// Array
const b = Array(4, 5, 6);
// 指定数量、指定内容
const large = new Array(1000).fill('same');


/* Array can consist of different datatypes. Even array. */
const c = [1, true, 'Yeah', b];
```

## 2. 索引

### 2.1. 通过索引获取元素
```js
const a = [1, 2, 3];

// []不支持负数
a[-1]; // undefined

// at支持负数
a.at(-1); // 3
```
### 2.2. 查询某个元素的索引
```js
// get the index of the certain element, 0-n is valid, -1 is valid
// 只返回匹配的第一个元素，重复的就不看
// Be careful that it is strict comparision.
let a = [1, 2, 3, 1];
a.indexOf(1);     // 0
a.indexOf(6);     // -1
```

## 3. length

```js
const length = c.length;
```

## 4. 修改
js 的数组是动态数组，故而不用考虑内存。
```js
// add element
c.push('Last');         // Last
c.unshift('First');     // First
console.log(c);
// return the new length of Array
// const new_length = c.push('Last');
// const new_length2 = c.unshift('First');
// console.log(c, new_length, new_length2);

// remove element
c.pop();                // Last
c.shift();              // First
console.log(c);
// return the removed element
// const element = c.pop();                // Last
// const element2 = c.shift();              // First
// console.log(c, element, element2);
```
```js
// 直接数组下标赋值
// const 可以：
// Although the variable c is const, we can alter the element of c
// The primitive values are immutable, but an Array is not a primitive value.
const c = [];   // let or const 都行
for(let i = 0; i < 5; i++) {
    c[i] = i;
}

// But it is NOT allowed to replace the entire Array
// c = [7, 8, 9];
```

## 5. 判断 Array 是否包含某个元素
```js
// get true/false when Array does/doesn't include element.
// Be careful that it is also strict comparision.
const flag = c.includes('Hello');
const flag2 = c.includes('World');
console.log(flag, flag2);
```