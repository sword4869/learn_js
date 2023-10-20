# 激活
```javascript
// 必须是第一行代码，注释当然不算
// 如果不是第一行代码，那么严格模式就不会被激活
'use strict';
```


# 效果
- 只能使用声明过的变量
```javascript
// let or const
let a1 = 3;
let a2 = 4;

// global variable
c = 4
if(true) b = 3;
```

```javascript
'use strict';

// let or const
let a1 = 3;
let a2 = 4;

// global variable
c = 4   // Uncaught ReferenceError ReferenceError: c is not defined
if(true) b = 3; // Uncaught ReferenceError ReferenceError: b is not defined
```

- 禁用了为未来版本使用而保留的关键字
```javascript
let interface = 3;
// nothing error
```

```javascript
'use strict';
let interface = 3;
// SyntaxError: Unexpected strict mode reserved word
```