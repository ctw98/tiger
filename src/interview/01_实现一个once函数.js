function once(fn){
    let run = false;
    return  function(...args){
        if(!run){
            run = true;
            return fn.apply(this.args)
        }
    }
}

function Twice(){
    console.log('hhhhhhhhh');
}
 const onceTwice =  once(Twice)

 onceTwice();
 onceTwice();
