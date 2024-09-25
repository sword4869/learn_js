## 检测 安装是否成功

[Node.js — 在任何地方运行 JavaScript (nodejs.org)](https://nodejs.org/zh-cn)

Node.js is a **JavaScript runtime environment**  that is used for hosting websites. 

It offers users the ability to write websites in JavaScript whose code executes on the **server** instead of a client’s browser.

```cmd
node -v             // 显示安装的 node.js 的版本
npm -v              // 显示安装的 npm 版本
```

window系统升级node只能到node官网下载window安装包来覆盖之前的node。

## 更换淘宝镜像

```cmd
npm config set registry https://registry.npmmirror.com
```

## 下载路径配置

### 查看现有配置

默认下载到C盘，这是我们不想的。

（1）全局模块的下载位置

`prefix`：里面有个 `node_modules` 文件夹。

```cmd
创建D:\MySoftware\node-v16.20.1-win-x64\node_modules

npm config set prefix "D:\MySoftware\node-v16.20.1-win-x64"

npm config get prefix
D:\MySoftware\node-v16.20.1-win-x64
```

```cmd
# 直接展示里面的 `node_modules` 文件夹
npm root -g
D:\MySoftware\node-v16.20.1-win-x64\node_modules
```

修改环境变量：

- prefix: 用户PATH中，将原本npm路径，替换为新 global 的路径 `D:\MySoftware\node-v16.20.1-win-x64`
- prefix中node_modules：系统，新建`NODE_PATH`, 值为 `D:\MySoftware\node-v16.20.1-win-x64\node_modules`，然后系统PATH添加 `%NODE_PATH%`.

（2）缓存文件夹

`cache`

```cmd
npm config get cache
C:\Users\lab\AppData\Local\npm-cache

npm config set cache "D:\MySoftware\node-v16.20.1-win-x64\npm-cache"

npm config get cache
C:\Users\lab\AppData\Local\npm-cache
```


## 安装模块

vue

```cmd
npm install -g vue-cli@2.9.6

vue -V      // 注意后边是 大写 V
```

webpack

```cmd
npm install -g webpack 
```

## 其他

[避坑了避坑了！！！全网最详细Nodejs安装配置_node安装配置-CSDN博客](https://blog.csdn.net/weixin_45754463/article/details/135279187)

## 代替默认的命令行工具 npm(可选)

### pnpm

```cmd
npm install -g pnpm
```

### cnpm

我们不选，npm的使用还没遇到过问题。

```cmd
// 更换镜像为淘宝镜像
# npm install -g cnpm --registry=https://registry.npm.taobao.org, 已经过期
npm install -g cnpm --registry=https://registry.npmmirror.com
```

例如

```cmd
cnpm install -g vue-cli@2.9.6
```