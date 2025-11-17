import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function CountUp(){
        setCount(count + 1)
    }

    return(
    <div>
        <h3>{count}</h3>
        <button onClick={CountUp}>Click Me!</button>
    </div>
    )
}


export default Counter;