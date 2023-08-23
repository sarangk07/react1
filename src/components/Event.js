import React, { useState } from "react";



const Evnt = ()=>{
    const [count,setCount] = useState(0);
    const plu = ()=>{
        setCount(count+1);
    }
    const min = ()=>{
        count<=0?setCount(count):setCount(count-1);
    }

    return (
        <div>
            <h1>React Events</h1>
            <h2>{count}</h2>
            <button onClick={plu}>+</button>
            <button onClick={min}>-</button>
            <h3>fill Details</h3>
        </div>
    );
}

export default Evnt;