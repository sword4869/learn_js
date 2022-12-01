- [1. NPM](#1-npm)
  - [1.1. 安装](#11-安装)
  - [1.2. NPM的包](#12-npm的包)
  - [1.3. npm init](#13-npm-init)
  - [1.4. install](#14-install)
    - [1.4.1. 项目中](#141-项目中)
    - [1.4.2. 项目外, 全局下载](#142-项目外-全局下载)
  - [1.5. build](#15-build)
- [2. Nodejs](#2-nodejs)
  - [2.1. introduction](#21-introduction)
  - [2.2. 下载和更新nodejs](#22-下载和更新nodejs)

---

# 1. NPM
|meaning|npm command| yarn command|
|-|-|-|
|初始化项目的 package.json|npm init|yarn init|
|安装但不写入 package.json|npm install	|`yarn` or `yarn install`|
|安装并写入到 生产的 package.json|npm install xxx --save	|yarn add xxx|
|安装并写入到 开发的 package.json|npm install xxx --save-dev	|yarn add xxx --dev|
|全局安装|npm install	-g|yarn global add xxx|
|卸载并更新package.json|npm uninstall xxx --save	|yarn remove xxx|
|更新|npm update xxx --save	|yarn upgrade xxx|

PS: `-S, --save`, `-D, --save-dev`

## 1.1. 安装
```bash
$ sudo apt install npm
```


> 配置源

但是没必要，直接覆盖换源得了。

```bash
npm config set registry https://registry.npmmirror.com
```

PS: 
<details>
<summary>cnpm的方式</summary>

```bash
# npm install -g cnpm --registry=https://registry.npm.taobao.org, 已经过期

$ npm install -g cnpm --registry=https://registry.npmmirror.com
```
cnpm这种方式，既保留了原来的npm源，又能用国内源cnpm。
</details>

> 更新版本

```bash
$ sudo npm install -g npm 

$ npm -v
9.1.2

$ npm version
{
  npm: '9.1.2',
  node: '16.18.0',
  v8: '9.4.146.26-node.22',
  uv: '1.43.0',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '93',
  nghttp2: '1.47.0',
  napi: '8',
  llhttp: '6.0.10',
  openssl: '1.1.1q+quic',
  cldr: '41.0',
  icu: '71.1',
  tz: '2022b',
  unicode: '14.0',
  ngtcp2: '0.8.1',
  nghttp3: '0.7.0'
}

```

## 1.2. NPM的包

NPM(Node Package Manager)


每个 package 必有`package.json`。
- `name`：包名，引用此包的标识符
- `dependencies`：生产依赖
- `devDependencies`: 开发依赖
- `main`：主文件

## 1.3. npm init

```bash
$ mkdir project && cd project

project$ npm init

# 生成项目的package.json，确保让包一定安装在此项目中。
project$ ls
package.json
```

## 1.4. install
### 1.4.1. 项目中
> 创建空项目
```bash

# 下载到 node_modules 文件夹中
# node i xxx
project$ node install xxx
```

```bash
$ npm install xx --save
$ npm install xxx --save-dev
```
- 都是添加此包到项目`package.json`的`dependencies`(or `devDependencies`)中，可以省掉你手动修改 `package.json` 文件的步骤

- 我们在使用 `npm install` 安装模块或插件时，有两种命令把它们写入到 `package.json` 文件中去，在 `package.json` 里面体现出的区别就是:
  
  - 使用 `--save` 安装的插件，会被写入到 `dependencies` （需要发布到生产环境）对象里面去，
  
  - 使用 `--save-dev` 安装的插件，会被写入到 `devDependencies` （这里的插件只用于开发环境）对象里面去。


> 下载别人的项目

项目中没有包，只写了项目package.json的dependencies，所以要安装才能运行。
```bash
# 下载当前项目所依赖的包
$ npm install
```

### 1.4.2. 项目外, 全局下载
一般用于配置工具

```bash
$ npm install -g xxx
```


## 1.5. build

```bash
$ npm run build
  Bundles the app into static files for production.

$ npm test
  Starts the test runner.
```
这两个都是package.json中配置的
```json
"scripts": {
  "build": "vuepress build docs",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
```
$ npm start
  Starts the development server.
```

# 2. Nodejs
## 2.1. introduction
Node.js is a **JavaScript runtime environment**  that is used for hosting websites. 

It offers users the ability to write websites in JavaScript whose code executes on the **server** instead of a client’s browser.


## 2.2. 下载和更新nodejs
确保你已经下好了[npm](#14-install)
```bash
# 直接下是老版本
sudo apt install nodejs

# 需要更新nodejs, 先通过npm下n, 再用n更新nodejs
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
v16.18.0
```
