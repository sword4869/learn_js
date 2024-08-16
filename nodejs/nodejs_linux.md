

## 安装
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



## 下载和更新nodejs
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
