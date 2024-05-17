//方法一：使用for循环
function sumArray(arr){
    let sum = 0;
    for(let i = 0;i < arr.length;i++){
        sum += arr[i];
    }
    return sum;
};

let arr = [1,2,3,4,5]
console.log(sumArray(arr));


//方法二：使用Array.prototype.reduce方法
function sumArray1(arr){
    return arr.reduce((acc,cur) => acc + cur,0)
}
console.log(sumArray1(arr));