[如何在本地启动简易 Http 服务器_npx serve-CSDN博客](https://blog.csdn.net/sigmarising/article/details/117149642)

## 局域网下载文件



## http协议

打开Vue的 `index.html`，抛出了一个错误，因为 ES 模块不能通过 `file://` 协议工作，也即是当你打开一个本地文件时浏览器使用的协议。

由于安全原因，ES 模块只能通过 `http://` 协议工作，也即是浏览器在打开网页时使用的协议。

为了使 ES 模块在我们的本地机器上工作，我们需要使用本地的 HTTP 服务器，通过 `http://` 协议来提供 `index.html`。