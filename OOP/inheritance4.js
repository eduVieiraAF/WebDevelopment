function MyObject() {

}

console.log(MyObject.prototype)

const obj1 = new MyObject
const obj2 = new MyObject

console.log(obj1.__proto__ === MyObject.prototype)
console.log(obj1.__proto__ === obj2.__proto__)

MyObject.prototype.name = "Anonnymous"
MyObject.prototype.greet = function() { console.log(`Hello, my name's ${this.name}!`) }
// ↑ Arrow function here returns name as undefined

obj1.name = "Edu"
obj1.greet()
obj2.greet()

console.log(obj1, obj2)

const obj3 = {}
obj3.__proto__ = MyObject.prototype // obj manualy inherits from MyObject
obj3.name = "Richie"
console.log(obj3)
obj3.greet()