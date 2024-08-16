[模板语法 | Vue.js (vuejs.org)](https://cn.vuejs.org/guide/essentials/template-syntax.html)

## 总结

![指令语法图](https://cn.vuejs.org/assets/directive.DtZKvoAo.png)

| **指令**  | **作用**                                            |
| --------- | --------------------------------------------------- |
| v-on（`@`） | 为HTML标签绑定事件                                  |
| v-bind  （`:`） | 单向绑定。数据流向html页面，但反之不行  `<input type="text" :value="firstName">` |
| v-model   | 在表单元素上创建双向数据绑定，绑定到value属性上 `<input type="text" v-model="firstName">` |
| v-if/v-else-if/v-else| 条件性的渲染某元素，判定为true时渲染,否则不渲染     |
| v-show    | 根据条件展示某元素，区别在于切换的是display属性的值 |
| v-for     | 列表渲染，遍历容器的元素或者对象的属性              |
| v-html    | 输出html代码，而不是文本                             |

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241721831.png)

![alt text](https://cdn.jsdelivr.net/gh/sword4869/pic1@main/images/202407241730370.png)

```vue
// v-for,  :key
<li v-for="g in games" :key="g.id">{{ g.name }}</li>

let games = reactive([
  { id: 'ahsgdyfa01', name: '英雄联盟' },
  { id: 'ahsgdyfa02', name: '王者荣耀' },
  { id: 'ahsgdyfa03', name: '原神' }
])
```



## 使用 JavaScript 表达式

文本插值

 Vue 指令 attribute 的值中



```html
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

下面的例子都是**无效**的：

```html
<!-- 这是一个语句，而非表达式 -->
{{ var a = 1 }}

<!-- 条件控制也不支持，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

## 调用函数

```html
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```

## v-bind

### 动态绑定多个 attribute  值

```js
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}

<div v-bind="objectOfAttrs"></div>
```

### 动态参数

```html
<a v-bind:[attributeName]="url"> ... </a>
```

如果你的组件实例有一个数据属性 `attributeName`，其值为 `"href"`，那么这个绑定就等价于 `v-bind:href`。

注意：

避免在名称中使用大写字母，因为浏览器会强制将其转换为小写（单文件组件内的模板**不**受此限制）

```html
<a :[someAttr]="value"> ... </a>
```

上面的例子将会在 DOM 内嵌模板中被转换为 `:[someattr]`。如果你的组件拥有 “someAttr” 属性而非 “someattr”，这段代码将不会工作。



## 修饰符 Modifiers

例如 `.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()`：

```html
<form @submit.prevent="onSubmit">...</form>
```

