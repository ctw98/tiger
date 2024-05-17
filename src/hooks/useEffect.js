import React,{useState,useEffect} from "react"

//useEffect用于在函数组件中处理副作用。
//它接受两个参数：一个副作用函数和一个依赖数组。当依赖数组中的任何一个值发生变化时，副作用函数将被调用
function Timer(params) {
    const [time,setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time+1);
        }, 1000);

        return () => clearInterval(interval);
    },[time]);

    
    return <div>Time:{time}</div>
}

export default Timer