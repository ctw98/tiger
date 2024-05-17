//1.递归方法
function fibonacciRecursive(n){
    if(n <= 1){
        return n;
    }else{
        return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
    }
}

console.log(fibonacciRecursive(10));

//迭代方法
function fibonacciRecursive1(n){
    let a = 0 ,b = 1 ,temp;
    if(n === 0) return a;
    if(n === 1) return b;
    for(let i = 2;i <= n;i++){
        temp = a + b;
        a = b;
        b = temp ;
    }
    return b;
}
console.log(fibonacciRecursive1(10));

//动态规划方法
function fibonacciRecursive2(n){
    let dp = new Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    for(let i = 2;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
}
console.log(fibonacciRecursive2(10));