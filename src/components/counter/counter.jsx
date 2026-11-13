import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function handleClickToIncrease() {
        setCount(count + 1);
    }
    function handleClickToDecrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function handleClickToReset() {
        setCount(0);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClickToIncrease}>click to increase number </button>
            <button onClick={handleClickToDecrease}>decrease</button>
            <button onClick={handleClickToReset}>reset</button>
        </>
    );
}

export default Counter;
