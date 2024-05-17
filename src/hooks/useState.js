import React,{useState} from "react";

//useState用于在函数组件中管理状态
//返回一个包含当前状态和一个更新状态的函数的数组。更新状态的函数可以接受一个新的值，并更新状态
function Counter(params) {
    const [count,setCount] = useState(0);

    function handleClick(params) {
        setCount(count+1);
    }

    return <button onClick={handleClick}>Count:{count}</button>
}

export default Counter