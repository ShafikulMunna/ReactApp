import React, { useState, useEffect } from 'react'
import "./style2.css";
const UseEffect = () => {
    const [MyData, setMyData] = useState(0);

    useEffect(()=>{
        document.title = `chats(${MyData})` 
    })

    return (
        <>
            <h1>{MyData}</h1>
           <button onClick = {()=>setMyData(MyData + 1)}>INCR</button> 
        </>
    )
}

export default UseEffect
