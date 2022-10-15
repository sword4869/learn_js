- [1. Nodejs](#1-nodejs)
  - [1.1. introduction](#11-introduction)
  - [1.2. NPM](#12-npm)
    - [1.3. npm install](#13-npm-install)
- [2. build](#2-build)
- [3. 模块](#3-模块)
  - [3.1. 单独写](#31-单独写)
  - [3.2. 写在一起](#32-写在一起)

---
# 1. Nodejs
## 1.1. introduction
Node.js is a **JavaScript** runtime environment that is used for hosting websites. 

It offers users the ability to write websites in JavaScript whose code executes on the **server** instead of a client’s browser.


> installation
```bash
# 直接下是老版本
sudo apt install nodejs npm

# 升级版本
# 清除缓存信息
sudo npm cache clean -f
# 用npm全局安装一个管理node版本的管理模板n
sudo npm install -g n
# 升级到nodejs最新稳定版本
sudo n stable
```
window系统升级node只能到node官网下载window安装包来覆盖之前的node。
```bash
$ node -v
v12.22.9

$ npm -v
8.5.1
```
```bash
$ npm version
{
  npm: '8.5.1',
  node: '12.22.9',
  v8: '7.8.279.23-node.56',
  uv: '1.43.0',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '72',
  nghttp2: '1.43.0',
  napi: '8',
  llhttp: '2.1.4',
  http_parser: '2.9.4',
  openssl: '1.1.1m',
  cldr: '40.0',
  icu: '70.1',
  tz: '2022b',
  unicode: '14.0'
}
```

> 配置源

```bash
# npm install -g cnpm --registry=https://registry.npm.taobao.org, 已经过期

$ npm install -g cnpm --registry=https://registry.npmmirror.com
```
cnpm这种方式，既保留了原来的npm源，又能用国内源cnpm。

但是没必要，直接覆盖换源得了。
```bash
npm config set registry https://registry.npmmirror.com
```

## 1.2. NPM

NPM(Node Package Manager)


每个 package 必有`package.json`。
- `name`：包名，引用此包的标识符
- `dependencies`：生产依赖
- `devDependencies`: 开发依赖
- `main`：主文件


```bash
$ npm search xxx

# npm r xxx
$ npm remove xxx
$ npm remove xxx --save

$ npm install xxx
$ npm install xxx --save
$ npm install -g xxx

$ npm run build

$ npm start
```
### 1.3. npm install

> 创建空项目
```bash
$ mkdir project  && cd project

# 生成项目的package.json，确保让包一定安装在此项目中。
$ npm init

# 下载到 node_modules 文件夹中
# node i xxx
$ node install xxx

# --save, 添加此包到项目package.json的dependencies中
$ node install xxx --save
```

> 下载别人的项目

项目中没有包，只写了项目package.json的dependencies，所以要安装才能运行。
```bash
# 下载当前项目所依赖的包
$ npm install
```

> 全局下载，一般用于配置工具

```bash
$ npm install -g xxx
```
比如 cnpm


# 2. build

```bash
$ npm start
  Starts the development server.

$ npm run build
  Bundles the app into static files for production.

$ npm test
  Starts the test runner.

$ npm run eject
  Removes this tool and copies build dependencies, configuration files
  and scripts into the app directory. If you do this, you can’t go back!

```

# 3. 模块
## 3.1. 单独写
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


## 3.2. 写在一起
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

