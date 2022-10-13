var obj = {}
obj.name = "1"
var obj2 = obj
var obj3 = obj

obj.name = "2"
console.log(obj.name, obj2.name)    
// 2 2

obj2.name = "3"
console.log(obj.name, obj2.name)    
// 3 3

obj = null
console.log(obj, obj2, obj3)    
// null { name: '3' } { name: '3' }

obj2.name = "4"
console.log(obj, obj2, obj3)    
// null { name: '4' } { name: '4' }

obj2 = {age: 10}
console.log(obj, obj2, obj3)    
// null null { name: '4' }