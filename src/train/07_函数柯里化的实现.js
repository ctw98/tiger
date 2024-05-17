function curry(fn){
    if (typeof fn !== 'function'){
        throw new Error('curry() requires a funtion');
    }

    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this.args);
        }else{
            return function(...args2){
                return curried.apply(this,args.concat(args2));
            }
        }
    };
}

//使用示例
function sum(a,b,c){
    return a+b+c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1,2),(3));