//方法一：使用加法（仅限于数字）
let a = 5;
let b = 10;

a = a + b; //15
b = b - a; //5
a = a - b; //10

console.log(a);
console.log(b);

//方法二：使用解构赋值
[a,b] = [b,a];

console.log(a);
console.log(b);