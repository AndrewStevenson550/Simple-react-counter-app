import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function CountUp(){
        setCount(prevCount => prevCount + 1);
    }
    function CountDown(){
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    }

    // The logic to prevent negative numbers is now inside CountDown

    return(
    <div>
        <h3>{count}</h3>
        <button onClick={CountUp}>Click Me +!</button>
        <button onClick={CountDown}>Click Me -!</button>
    </div>
    )
}


export default Counter;