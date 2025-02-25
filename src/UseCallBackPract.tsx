import React, { useCallback, useState } from "react";

// caution to wrap on React.memo is important to render only if props are changing
const ChildComp = React.memo(({click}) => {
    console.log("called the render at child");
    return (
        <div>
            Child called
        </div>
    );
});
export const UseCallBackPract = () => {
     const [count, setCount] = useState(0);
     const [data, setData] = useState(false);
     // useCallback will create a reference only when 'data' changes
     const fun = useCallback(() => {
        return 1;
     },[data]);
    
    // this will create always a new reference of fun hence render child component <ChildButton/>
    //  const fun  = () => {
    //     return 1;
    //  }
     return(
        <div>
            Use call back {count}
            <ChildComp click= {fun}/>
            <button onClick={()=>{setCount((res)=>res+1)}}>Click Me To Test</button>
            <button onClick={()=>{setData(!data)}}>Click Me To Render Child</button>
        </div>
     );
}


