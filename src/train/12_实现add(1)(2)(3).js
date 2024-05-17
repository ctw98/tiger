//第一种
function add(num){
    let sum = num;
    function innerAdd(num){
        if(num !== undefined){
            console.log(num);
            sum += num;
            console.log('sum',sum);
            return innerAdd;
        }else{
            return sum;
        }
       
    }
    innerAdd.toString = function(){
        return sum;
    }

    return innerAdd;
}

console.log(add(1)(2)(3));

// var add = function(m){
//     var temp = function(n){
//         return add(m + n);
//     }
//     temp.toString = function(){
//         return m;
//     }
//     return temp;
// }
// console.log(add(3)(4)(5));


//第二种
function add1(){
    let sum = 0;
     function innerAdd(num){
        if(num !== undefined){
            console.log(num);
            sum += num;
            console.log('sum',sum);
            return innerAdd;
        }else{
            return sum;
        }
     }
     innerAdd.getResult = function(){
        return sum;
     }
     return innerAdd;
}

let result = add1()(1)(2)(3);
console.log(result.getResult());
