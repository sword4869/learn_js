- [1. number](#1-number)
- [2. string](#2-string)
- [3. boolean](#3-boolean)
- [4. undefined](#4-undefined)
- [5. null](#5-null)
- [6. symbol](#6-symbol)
- [7. nigInt](#7-nigint)
- [8. 动态类型，获取变量类型](#8-动态类型获取变量类型)

---

7 primitive data types

## 1. number

```js
// used for decimal and integers
let age = 23;

let age2 = 0x11;
```
## 2. string
```js
// 单引号，双引号都行
let firstName = 'Bob';
```
## 3. boolean
```js
let flag = true;
```
## 4. undefined
```js
let children;
```
## 5. null
```js
let pets = null;
```
## 6. symbol
```js
```
## 7. nigInt

```js

```
## 8. 动态类型，获取变量类型
```js
// 动态类型，可以直接更换变量的类型。
// 可以通过`typeof`来获取变量类型
let v;
console.log(typeof v);  // undefined
v = 0;
console.log(typeof v);  // number
v = true;
console.log(typeof v);  // boolean
v = null;
```

typeof运算符返回的是字符串类型，字符串内容是类型名
```js
let t = typeof 123;
console.log(t, typeof t);   // number string
console.log(t=='number');   // true
```

PS：
```js
// 这是typeof运算符的一个遗留性错误，把null当初object对象类型。
console.log(typeof v);  // object
```