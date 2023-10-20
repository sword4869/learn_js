```js
var info = {
    name: 'zs',
    age: 20
}
export default info
 
export var title = '小星星'
 
export var content = '哈哈哈'
```

```js
import p, {title, content as content1} from './test.js'
console.log(p);
console.log(title + '=======' + content1);

// { name: 'zs', age: 20 }
// 小星星=======哈哈哈
```

- `export default`最多只能有一个，`export`无限制
- `export default`导出的要用`import xxx`，`export`导出的要用`import {xxx}`
- `export default`的import时的`xxx`可以是任何；`export`的import时的`xxx`必须同导出名，或者可以使用as来起别名。
  
```js
// method 1
var info = {
    name: 'zs',
    age: 20
}
export default info


// method 2
export default {
    name: 'zs',
    age: 20
}
```