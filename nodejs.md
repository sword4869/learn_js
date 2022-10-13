# 模块
## 单独写
```js
// A文件 module.js
// 相当于 module.exports.x = 123;
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


## 写在一起
```js
// 省略 module. 直接写 exports 不行
module.exports = {
    x: 123;
    fun: function(){}
}
```


<details>
<summary><strong>底层细节</strong></summary>
<br />



```js
// var obj = {} 也一样
var obj = new Object()
obj.name = "1"
var obj2 = obj
var obj3 = obj

obj.name = "2"
console.log(obj.name, obj2.name)    
// 2 2

obj2.name = "3"
console.log(obj.name, obj2.name)    
// 3 3
```
`obj`变量存的值是对象`{...}`的地址，所以`obj2`复制`obj`的值，也指向那个内存地址。两者修改的都是同一块内存地址。

```js
obj = null
console.log(obj, obj2, obj3)    
// null { name: '3' } { name: '3' }

obj2.name = "4"
console.log(obj, obj2, obj3)    
// null { name: '4' } { name: '4' }

obj2 = {age: 10}
console.log(obj, obj2, obj3)    
null { age: 10 } { name: '4' }
```
`obj=null`只是让变量`obj`不再指向那块内存，而不是释放那块内存，所以`obj2`和`ojb3`还指向那块内存，且依然修改一个别的也变。

同理，`obj2={age: 10}`也是修改`obj2`让其不再指向那块内存。

综上所述，因为`exports`和`module.exports`的关系是`exports = module.exports`，所以直接使用`exports`，就无法修改`module.exports`的值。

</details>
