## 创建应用
```js
const app = createApp({
    setup() {
        const message = ref('Hello vue!')
        return {
            message
        }
    },
    data() {
        return {
            count: 0
        }
    },
    template: `<div>{{ message }}</div>`
})
```
当根组件没有设置 `template` 选项时，Vue 将自动使用容器的 `innerHTML` 作为模板。

## 应用配置

确保在挂载应用实例之前完成所有应用配置！

```js
app.config.errorHandler = (err) => {
  /* 定义一个应用级的错误处理器，用来捕获所有子组件上的错误 */
}

// 注册应用范围内可用的资源
app.component('TodoDeleteButton', TodoDeleteButton)
```