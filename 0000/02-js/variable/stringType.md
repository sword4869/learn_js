- [创建](#创建)
- [1. length](#1-length)
- [2. index](#2-index)
- [3. 子串](#3-子串)
- [indexOf()函数检索位置](#indexof函数检索位置)
- [4. split](#4-split)
- [5. 拼接](#5-拼接)
- [trim](#trim)
- [6. \`\`符号](#6-符号)


---
## 创建

方式1：


```js
// 单引号，双引号都行
let firstName = 'Bob';
var str = 'Hello String';
```




方式2：

```js
var str = new String("Hello String");
```

## 1. length

```js
let b1 = 'asfd fsd';
b1.length     // 8
```
## 2. index

同 Array `[]` 不支持负数，`.at()` 支持负数
```js
let b1 = 'asfd fsd';

b1[0]               // 'a'
b1[-1]              //undefined

b1.at(0)    // 'a'
b1.at(-1)   // 'd'

b1.charAt(0)               // 'a'
b1.charAt(-1)              //undefined
```

查询indexOf，可以输入多个字符

```js
let b1 = 'asfd fsd';

b1.indexOf('f')         // 2
b1.indexOf('fd')        // 2
b1.indexOf('fs')        // 5
b1.indexOf('fsaa')        // -1
```

## 3. 子串

`slice` is better than `substring`

- substring : 不支持负数。把负数视为0，若start比end小，则交换。

    ```js
    let b1 = 'asfd fsd';

    b1.substring(3, -2)     // 'asf'
    b1.substring(-2 , 3)    // 'asf'
    ```
- slice：支持负数

    ```js
    let b1 = 'asfd fsd';
    b1.slice(3, -2)         // 'd f'
    ```

## indexOf()函数检索位置

indexOf()函数用于检索指定内容在字符串中的索引位置的，返回值是索引，参数是指定的内容。

```js
let b1 = 'asfd fsd';

console.log(b1.indexOf("fd")); // 2
```
## 4. split

```js
let url = 'https://www.baidu.com/1.jpg';
let url_array = url.split('/');     // ['https:', '', 'www.baidu.com', '1.jpg']
let suffix = url_array.at(-1);      // '1.jpg'
```

## 5. 拼接
```js
let language = 'Java' + ' ' + 'script';
```

## trim

trim()函数用于去除字符串两边的空格的。添加如下代码：

```js
var s = str.trim();
console.log(s.length);
```


## 6. \`\`符号

- 可以随便用引号

    ```js
    let quotation = `I'am ironman.`;
    ```
- 多行

    不能缩进
    ```js
    // 为了实现
    let q = 'A\nB\nC';

    if(true){
        let q = `A
        B
        C`
        console.log(q)
    }
    /*
    A
        B
        C
    /*

    if(true){
        let q = `A
    B
    C`
        console.log(q)
    }
    /*
    A
    B
    C
    */
    ```
- 可以用变量（里面是一个表达式就行）

    ```js
    let ok = 'ok'
    let quotation2 = `${ok} ${2 == 3} ${2 + 3}`;
    console.log(quotation2);    // ok false 5

    // 三元运算符
    let output = `${1 > 2 ? console.log('1>2') : console.log('2>1')}`;
    ```
