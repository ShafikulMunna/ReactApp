import React, {useState} from 'react'
import "./style.css"
const UseState = () => {
    const [mydata, setMyData] = useState(0);
    return (
        <>
          <div className = "container">
              <h1>{mydata}</h1>
              <button className = "right" onClick ={()=>setMyData(mydata + 1)}>INCR</button>
              <button className = "left" onClick = {mydata > 0 ?()=>setMyData(mydata - 1) : ()=>setMyData(0)}>DECR</button>
            </div>  
        </>
    )
}

export default UseState
