- [1. 两种构造数组的方式](#1-两种构造数组的方式)
- [2. 索引](#2-索引)
  - [2.1. 通过索引获取元素](#21-通过索引获取元素)
  - [2.2. 查询某个元素的索引](#22-查询某个元素的索引)
- [3. length属性](#3-length属性)
- [4. 修改](#4-修改)
- [5. 方法](#5-方法)


---
## 1. 两种构造数组的方式

```js
// []
const a = [1, 2, 3];

// Array: 可new 可不new
const b = Array(4, 5, 6);
const c = new Array(4, 5, 6);
```

```js
const large = new Array(1000).fill('same');

/* Array can consist of different datatypes. Even array. */
const d = [1, true, 'Yeah', a];
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

## 3. length属性

```js
const length = a.length;
```

## 4. 修改
js 的数组是动态数组，故而不用考虑内存。

```js
const arr = [1, 2, 3];

arr[10] = 1;
console.log(arr[10]); // 1
console.log(arr[9]);  // undefined
console.log(arr); // [1, 2, 3, 1]
console.log(arr.length);  // 11
```
```js
// add element
const c = [1, 2, 3];
// 尾插 push 和头插 unshift，返回新数组长度
c.push('Last');
const length = c.unshift('First');
console.log(length);
console.log(c); // ["First", 1, 2, 3, "Last"]

// remove element
// 尾弹 pop 和头弹 shift，返回弹出元素
c.pop();
const d = c.shift();
console.log(d);   // First
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

## 5. 方法
```js
const arr = [1, 2, 3];


// forEach
arr.forEach(e=>console.log(e));


// 判断 Array 是否包含某个元素
const flag = arr.includes(1);
const flag2 = arr.includes("1");
console.log(flag, flag2); // true false


// 切片[start, end)
const arr2 = arr.slice(0, 2);
console.log(arr2);  // [1,2]


// 删除
arr.splice(0, 1); // 从哪个索引位置删除，删除元素的个数
console.log(arr); // [2, 3]
```