const array = [1,2,3,4,4,3,2,1]
//1.使用set
function uniqueArray(arr){
    return [...new Set(arr)]
}
const unique = uniqueArray(array)
console.log(unique);

//2.使用filter
function uniqueArray1(arr){
    return arr.filter((item,index) => arr.indexOf(item) === index)
}
const unique1 = uniqueArray1(array)
console.log(unique1);

//3.使用reduce
function uniqueArray2(arr){
    return arr.reduce((acc,cur) =>{
        if(!acc.includes(cur)){
            acc.push(cur)
        }
        return acc
    },[])
}
const unique2 = uniqueArray2(array);
console.log(unique2);

//4.使用较新版本的js（ECMAScript 2020 或者更高）结合set
const unique3 = [...new Set(array)];
console.log(unique3);
