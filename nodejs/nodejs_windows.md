[toc]

## windows

### 安装 nodejs

[Node.js — 在任何地方运行 JavaScript (nodejs.org)](https://nodejs.org/zh-cn)

Node.js is a **JavaScript runtime environment**  that is used for hosting websites. It offers users the ability to write websites in JavaScript whose code executes on the **server**.

```cmd
node -v             // 显示安装的 node.js 的版本
npm -v              // 显示安装的 npm 版本
```

md，22版本报gyp错误，是windowsSDK缺失。

看到“桌面C++”已经下了一个win11SDK，抱着怀疑的态度又下了一个win11SDK，结果真好了。。。

### 升级node js

> 报错版本太老

```cmd
(base) PS D:\Project\shortlink\console-vue> npm install -g npm
npm ERR! code EBADENGINE
npm ERR! engine Unsupported engine
npm ERR! engine Not compatible with your version of node/npm: npm@11.0.0
npm ERR! notsup Not compatible with your version of node/npm: npm@11.0.0
npm ERR! notsup Required: {"node":"^20.17.0 || >=22.9.0"}
npm ERR! notsup Actual:   {"npm":"8.19.4","node":"v16.20.1"}
```

window系统升级node只能到node官网下载window安装包来覆盖之前的node。

### 更换淘宝镜像

```cmd
npm config set registry https://registry.npmmirror.com
```

### 下载路径配置

#### 查看现有配置

默认下载到C盘，这是我们不想的。

（1）全局模块的下载位置

原本

```cmd
# 方法一：显示当前全局模块的下载位置
$ npm config get prefix
C:\Users\lab\AppData\Roaming\npm

# 方法二：直接展示里面的 `node_modules` 文件夹
$ npm root -g
C:\Users\lab\AppData\Roaming\npm
```

修改：

```bash
# 确保 node_modules 文件夹存在，让 prefix 里面有个 node_modules 文件夹。
$ cd D:\MySoftwareData\npmdata
$ mkdir node_modules
$ npm config set prefix "D:\MySoftwareData\npmdata"
```

修改环境变量：

- prefix: 用户PATH中

  删除原来的npm路径 `C:\Users\lab\AppData\Roaming\npm`

  添加新的 `D:\MySoftware\node-v16.20.1-win-x64`

- prefix中node_modules：系统，新建`NODE_PATH`, 值为 `D:\MySoftware\node-v16.20.1-win-x64\node_modules`，然后系统PATH添加 `%NODE_PATH%`.

（2）缓存文件夹

`cache`

```cmd
# 原本
$ npm config get cache
C:\Users\lab\AppData\Local\npm-cache

# 修改
$ cd D:\MySoftwareData\npmdata
$ mkdir npm-cache
$ npm config set cache "D:\MySoftwareData\npmdata\npm-cache"
```

### 其他

[避坑了避坑了！！！全网最详细Nodejs安装配置_node安装配置-CSDN博客](https://blog.csdn.net/weixin_45754463/article/details/135279187)

### 代替默认的命令行工具 npm(可选)

#### pnpm

```cmd
npm install -g pnpm
```

#### cnpm

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

## linux

### 安装

```bash
$ sudo apt install npm
```
镜像源同理。

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



### 下载和更新nodejs
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
