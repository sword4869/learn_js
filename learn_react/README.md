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

![picture 3](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241724489.png)  


![picture 1](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241724879.png)  

html内容被注入到 `<div id="root">`中。


html内容要用一个标签包裹起来，`<div>...</div>`或者`<>...</>`

![图 3](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241724654.png)  


## 2

![picture 2](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241724704.png)
![图 1](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241724753.png)  



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
  ![图 2](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241724055.png)  
  注释，`{/* */}`
  没有forEach。
  ![图 5](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241725967.png)  

  ![图 4](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241725279.png)  
