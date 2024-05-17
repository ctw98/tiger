import React from 'react';  
// import SimpleChart from './SimpleChart';  
// import UseState from './hooks/useState';
// import UseEffect from './hooks/useEffect';
import UseContext from './hooks/useContext';
// import UseReducer from './hooks/useReducer';
// import UseCallback from './hooks/useCallback';
// import UseMemo from './hooks/useMemo';
// import UseRef from './hooks/useRef';
  
export default function App() {  
    return (  
        <div>  
            <h1>我的React应用</h1>  
            {/* <SimpleChart />   */}
            <h1>我的ReactHooks</h1>  
            {/* <UseState /> */}
            {/* <UseEffect /> */}
            <UseContext />
            {/* <UseReducer/> */}
            {/* <UseCallback/> */}
            {/* <UseMemo/> */}
            {/* <UseRef/>  */}
        </div>  
    );  
}