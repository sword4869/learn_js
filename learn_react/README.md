# setup

```bash
$ npx create-react-app <project-name>
```

```bash
.
├── node_modules
├── public
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── package-lock.json
└── README.md
```

# 1
## 1

![picture 3](/image/0aa99764acdb1edd67a99339a7ad1452da9fbc2d29e70e22b18c20e9ba35f867.png)  


![picture 1](/image/0e866078f95e816c77cb41045b82852933cd5dbed0c6506772d64d7c49df555d.png)  

html内容被注入到 `<div id="root">`中。


html内容要用一个标签包裹起来，`<div>...</div>`或者`<>...</>`

![图 3](/image/a884d2a00119f07d2fc9da84ed651ec7cca0165e433fb7ad71d52b8c77fca09e.png)  


## 2

![picture 2](/image/a10593c729178540170e8b5c535343ae461106e72a9abb9d2cf9e326c6104d1d.png)
![图 1](/image/28568b16782d8551b17a8c16b9d10d884c0ead63e1d26baa504cdc986aa0bd55.png)  



将 html 内容写成一个组件。
- 这是一个类
- 类里有一个`render()`方法，此方法返回html内容。


PS：
- jsx和js一样（都是可以在js中写html）
- 为了标识清晰（因为显示的图标不同)，约定使用jsx来作为页面的后缀
- 文件名(`App.jsx`)和import的组件首字母大写(`import App from "./App"` and `<App/>`)


JSX:
- JS中出现`()`表示要写html，html中出现`{}`表示要写JS
- html和JS关键词冲突：
  `<label for=""/>` → `<label htmlFor=""/>`
  `<div class=""/>` → `<div className=""/>`
  `<div style="background: blue;"/>` → `<div style={{backgroundColor: "skyblue"}}>`或者
  ![图 2](/image/b8d4a9d3f69feb3e2ad502c6bcd7b02febf69593afa0f4d16819dd3aa6c60390.png)  
  注释，`{/* */}`
  没有forEach。
  ![图 5](/image/15df95edddf869b88dc5e3beede7e2baf9f726e83b91b164aa590cc80bf470e2.png)  

  ![图 4](/image/88f4dd4d99e0d2e16baf5b961322038d909ffdf70d934ca921776f62f4db9de6.png)  
