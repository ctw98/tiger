//1.toLocaleString
let num = 1234567.89;
let formattedNum = num.toLocaleString();
console.log(formattedNum);

//为toLocaleString方法提供一个对象，明确制定你想要的语音环境（locale）
let formattedNum1 = num.toLocaleString('en-US');
console.log(formattedNum1);