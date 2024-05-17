import React,{createContext,useContext,useState} from "react";

//useContext用于在函数组件中使用上下文。
//他接受一个上下文对象并返回上下文的当前值。当上下文的值发生变化时，函数组件将重新渲染。
const CountContext = createContext(0)

function Header(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <button onClick={() => {setCount(count+2)}}>
                count is {count}
            </button>
            <CountContext.Provider value={count}>
                <Sum/>
                <Children/>
            </CountContext.Provider>
        </div>
    )
};

const Sum = () => {
    const Num = useContext(CountContext)
    return <h2>子组件接受到的值：{Num}</h2>
}

const Children = () => {
    return(
        <div>
            <CountContext.Consumer>
            {
                n => <h2>第二个组件接受到的值：{n}</h2>
            }
            </CountContext.Consumer>
        </div>
    )
}



export default Header