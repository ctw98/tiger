//浅拷贝(Shallow Copy)
//1.Object.assign（）实现
function shallowCopy(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }
    return Object.assign({},obj);
}

const original = {a:1,b:{c:2}};
const copied = shallowCopy(original);
console.log(copied);


//深拷贝（Deep Copy）
function deepCopy(obj,hash = new WeakMap()){
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    // 如果是日期或正则对象则直接返回一个新对象
    if(obj instanceof Date){
        return new Date(obj);
    }
    if(obj instanceof RegExp){
        return new RegExp(obj);
    }

    //如果hash中有这个对象，则直接返回hash中存储的对象引用
    if(hash.has(obj)){
        return hash.get(obj);
    }

    let newObj = Array.isArray(obj)?[]:{};
    hash.set(obj,newObj);

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepCopy(obj[key],hash);
        }
    }
    return newObj;
}

const original1= {a:1,b:{c:2}};
const copied1 = deepCopy(original1);
console.log(copied1);
console.log(original1 === copied1);
console.log(original1.b === copied1.b);
