//防抖（Debounce）
function debounce(func,wait){
    let timeout;
    return function(){
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            func.apply(context,args);
        },wait);
    }
}
const myEfficientFn = debounce(function(){

},250);

window.addEventListener('resize',myEfficientFn);

//节流（Throttle）
function throttle(func,limit){
    let inThrottle;
    return function(){
        const context = this;
        const args = arguments;
        if(!inThrottle){
            func.apply(context,args);
            inThrottle = true;
            setTimeout(function(){
                return inThrottle = false;
            }, limit);
        }
    }
}
const myEfficientFn1 = throttle(function(){

},250);

window.addEventListener('resize',myEfficientFn1);





