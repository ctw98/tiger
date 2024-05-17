//方法一：使用Array.prototype.slice.call()
function toArray(arrayLike){
    return Array.prototype.slice.call(arrayLike);
}

var arrayLike = {0:'a',1:'b',2:'c',length:3};
var realArray = toArray(arrayLike);
console.log(realArray);


//方法二：使用扩展运算符
function toArray1(arrayLike){
    return [...arrayLike];
}
var realArray1 = toArray1(arrayLike);
console.log(realArray1);


//方法三：使用Array.from()方法
function toArray2(arrayLike){
    return Array.from(arrayLike);
}
var realArray2 = toArray2(arrayLike);
console.log(realArray2);