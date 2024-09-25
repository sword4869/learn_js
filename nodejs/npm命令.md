

## package结构


每个 package 必有`package.json`。
- `name`：包名，引用此包的标识符
- `dependencies`：生产依赖
- `devDependencies`: 开发依赖
- `main`：主文件

## npm命令

NPM(Node Package Manager)

|meaning|npm command| yarn command|
|-|-|-|
|初始化项目的 package.json|npm init|yarn init|
|安装但不写入 package.json|npm install	|`yarn` or `yarn install`|
|安装并写入到 **生产的** package.json|npm install xxx --save	|yarn add xxx|
|安装并写入到 **开发的** package.json|npm install xxx --save-dev	|yarn add xxx --dev|
|全局安装|npm install -g|yarn global add xxx|
|卸载并更新package.json|npm uninstall xxx --save	|yarn remove xxx|
|更新并更新package.json|npm update xxx --save	|yarn upgrade xxx|

PS: `-S, --save`, `-D, --save-dev`

### init

```bash
$ mkdir project && cd project

project$ npm init

# 生成项目的package.json，确保让包一定安装在此项目中。
project$ ls
package.json
```

### install

#### 创建空项目

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

#### 下载别人的项目

项目中没有包，只写了项目package.json的dependencies，所以要安装才能运行。
```bash
# 下载当前项目所依赖的包
$ npm install
```

#### 项目外, 全局下载

一般用于配置工具

-g是全局安装的意思，不加 -g 就是默认下载到当前目录

```bash
$ npm install -g xxx
```


### dev build

```bash
$ npm run dev

$ npm run build
```
这两个都是package.json中配置的
```json
"scripts": {
    "dev": "vite",
    "build": "run-p type-check \"build-only {@}\" --",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit -p tsconfig.app.json --composite false"
},
```