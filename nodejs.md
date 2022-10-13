# 模块

```js
// A文件 module.js
exports.x = 123;
exports.fun = function(){}


// B文件引入自定义模块
let mod = require("../module.js")  // 可以省略后缀， `../module`
console.log(mod.x)
mod.fun()
```
```js
// 官方模块直接引
let fs = require("fs")
```

Node中每一个js文件是一个模块，每个模块都是运行在一个函数中。
所以每个模块中的变量和函数都是局部的，需要`exports`。

<details>
<summary><strong>底层细节</strong></summary>
<br />


![picture 1](/image/9a471b8595a1efe77161a3676763d359b0bfcdd11cbc9974ea23ab4faedb6d9d.png) 

![picture 3](/image/bd2a7ac1a0309dd8b81d94b6384b94be007ddeeab8d3257129551e621a4086bc.png)  


![picture 2](/image/2284dcbb84396d4e0c23e29ac6f028fb66ebfca7ae7028366d3889542fa480ca.png)  

</details>

