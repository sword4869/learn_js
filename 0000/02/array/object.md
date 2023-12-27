
object 就是其他语言里的字典，key-value pair.

## property

Note: key is not the String type! It is **property**. 

Therefore, key can be expressed either as a string or directly.
```js
const person = {
    'age': 22,
    name: 'Bob'
};
```
## operations
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


// The function of object
const person2 = {
    age: 22,
    name: 'Bob',
    getAgeDiff: function (age) {
        // we can create a property
        this.ageDiff = this.age - age;
        console.log(this.ageDiff);
    }
};
person2.getAgeDiff(10);
```