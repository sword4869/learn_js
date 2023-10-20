- [1. length](#1-length)
- [2. index](#2-index)
- [3. 子串](#3-子串)
- [4. split](#4-split)
- [5. 拼接](#5-拼接)
- [6. \`\`符号](#6-符号)


---
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
b1[b1.length - 1]   // 'd'

b1.at(0)    // 'a'
b1.at(-1)   // 'd'
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
