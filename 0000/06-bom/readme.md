BOM的全称是Browser Object Model 浏览器对象模型。JavaScript将浏览器的各个组成部分封装成了对象。

BOM中提供了如下5个对象：

| 对象名称  | 描述           |
| :-------- | :------------- |
| Window    | 浏览器窗口对象 |
| Screen    | 屏幕对象       |
| Navigator | 浏览器对象     |
| History   | 历史记录对象   |
| Location  | 地址栏对象    |


window对象提供了获取其他BOM对象的属性：

| 属性      | 描述                  |
| --------- | --------------------- |
| history   | 用于获取history对象   |
| location  | 用于获取location对象  |
| Navigator | 用于获取Navigator对象 |
| Screen    | 用于获取Screen对象    |

## Window对象

window对象指的是浏览器窗口对象，是JavaScript的全部对象，所以对于window对象，我们可以直接使用，并且对于window对象的方法和属性，我们可以省略window.

~~~js
window.alert('hello');
// 其可以省略window.  所以可以简写成
alert('hello')
~~~

| 函数          | 描述                                               |
| ------------- | -------------------------------------------------- |
| alert()       | 显示带有一段消息和一个确认按钮的警告框。           |
| comfirm()     | 显示带有一段消息以及确认按钮和取消按钮的对话框。   |
| setInterval() | 按照指定的周期（以毫秒计）来调用函数或计算表达式。 |
| setTimeout()  | 在指定的毫秒数后调用函数或计算表达式。             |

```js
alert("ABC");

const flag = confirm("ABC");    // true确定或false取消

setInterval(function pr(){console.log("A");}, 2000);    // 每隔2000ms

setTimeout(function pr(){console.log("A");}, 2000);    // 2000ms后执行一次
```

## Location对象

```js
// 获取浏览器地址栏信息
console.log(location.href);

// 设置浏览器地址栏信息
location.href = "www.baidu.com";
console.log(location.href);
```