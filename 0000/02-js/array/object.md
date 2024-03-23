- [Object](#object)
  - [property](#property)
  - [operations](#operations)
- [Json](#json)

---
## Object
object 就是其他语言里的字典，key-value pair.

~~~js
var 对象名 = {
    属性名1: 属性值1, 
    属性名2: 属性值2,
    属性名3: 属性值3,
    函数名称: function(形参列表){}
};

var user = {
    name: "Tom",
    age: 10,
    gender: "male",
    eat: function(){
        console.log("用膳~");
    },
    setName: function(name){
        this.name = name;
    }
}
~~~

### property

Note: key is not the String type! It is **property**. 

Therefore, key can be expressed either as a string or directly.
```js
const person = {
    'age': 22,
    name: 'Bob'
};
```
### operations
```js
/* 2 types to get value */
// Dot style: no ''
const age = person.age;
// Bracket style: has ''
const name = person['name'];

// the difference is that Dot style only allows the direct access while Bracket style allow the expression by computed.
const key = 'age';
console.log(person.key);    // undefined
console.log(person[key]);   // 22

// PS: when the key is not in Object , it also returns undefined.
console.log(person.address);
console.log(person['address']);

// add element
person['address'] = 'China';
person.phoneNumber = '12312341234';
```

## Json

JSon只保存属性，不保存函数。
```js
var user = {
    name: "Tom",
    age: 10,
    gender: "male",
    eat: function(){
        console.log("用膳~");
    },
    setName: function(name){
        this.name = name;
    }
}

const jsonstr = JSON.stringify(user);
console.log(jsonstr); // {"name":"Tom","age":10,"gender":"male"}

const user2 = JSON.parse('{"name":"Tom","age":10,"gender":"male"}');
```