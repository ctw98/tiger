//方法一：使用递归
function flattenArray(arr){
    let result = [];
    for(let i = 0; i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flattenArray(arr[i]));
        }else{
            result.push(arr[i])
        }
    }
    return result;
}

let nestedArray = [1,[2,3,[4],5]];
console.log(flattenArray(nestedArray));


//方法二：使用reduce方法
function flattenArray1(arr){
    return arr.reduce((acc,cur) => Array.isArray(cur)?[...acc,...flattenArray1(cur)]:[...acc,cur],[]);
}

console.log(flattenArray1(nestedArray));

//方法三：使用扩展运算符（ES6）
function flattenArray2(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr);
    }
    return arr;
}

console.log(flattenArray2(nestedArray));

//方法四：使用flat方法（ES10）
console.log(nestedArray.flat(Infinity));

