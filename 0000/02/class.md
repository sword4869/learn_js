```js
class Rectangle {}

let p = new Rectangle();
```
类声明
```js
class Rectangle {
    // 构造函数：一个类只能拥有一个名为“constructor”的特殊方法
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}
```

## 静态方法
对象不能调用静态方法，只能类调用。
```js
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName;
// undefined
p1.distance;
// undefined

console.log(Point.displayName);
// "Point"
console.log(Point.distance(p1, p2));
// 7.0710678118654755
```

## 字段声明

### 公有字段
```js
class Rectangle {
    // 不需要像 let、const 和 var 这样的关键字。
    height = 0;
    // 这个字段可以用也可以不用默认值来声明。
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

### 私有字段
从类外部引用私有字段是错误的。它们只能在类里面中读取或写入
```js
class Rectangle {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}
```