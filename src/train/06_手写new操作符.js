function myNew(constructor,...args){
    //1.创建一个新的空对象
    const obj = {};

    //2.将这个新对象的内部原型链接到构造函数的prototype对象
    obj.__proto__ = constructor.prototype;
    // const obj = Object.create(constructor.prototype)

    //3.将这个新对象作为this上下文，并调用构造函数
    const result = constructor.apply(obj,args);

    //4.如果构造函数返回的是一个对象，则返回这个对象；否则返回新创建的对象
    return result instanceof Object?result:obj;
}

//使用示例
function Person(name,age){
    this.name = name;
    this.age =age;
}

Person.prototype.greet = function() {
    console.log(`Hello,my name is ${this.name} and I'm ${this.age} years old.`);
}

//使用myNe创建Person的实例
const person = myNew(Person,'Alice','30');

console.log(person.name);
console.log(person.age);
person.greet();