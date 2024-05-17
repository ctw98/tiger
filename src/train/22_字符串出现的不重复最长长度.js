console.time('a');
const arr1 = [];
for(let i = 0;i<10000000;++i){
    arr1[i]= 1;
}
console.timeEnd('a');

console.time('b');
const arr2 = [];
arr2[10000000 - 1]= 1;
for(let i = 0; i < 10000000 ;++i){
    arr2[i] = 1;
}
console.timeEnd('b');