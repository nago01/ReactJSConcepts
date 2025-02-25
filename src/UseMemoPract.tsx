import { useCallback, useState } from "react";

export const UseMemoPract = () => {
    const [count, setCount] = useState(1);
    const [data, setData] = useState(0);

    const fun = useCallback(() => {
        console.log('called this function');
        return 9999;
    }, [data]);

    return (
        <div>
            UseMemo Implementation
            <button onClick={() => {
                setCount((res) => res + 1)
            }}>Click Me</button>
            {count}
            {fun()}
            <button onClick={() => {
                setData((res) => res + 1)
            }}>Click for function to get called</button>
        </div>
    );
}