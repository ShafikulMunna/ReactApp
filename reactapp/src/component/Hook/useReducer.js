import React, {useReducer} from 'react'
import "./style.css";

const reducer = (mydata, action)=>
{
    if(action.type === "INCR")
    {
        mydata = mydata + 1;
    }
    if(mydata > 0 && action.type === "DECR")
    {
        mydata = mydata - 1;
    }

    return mydata;
}

const UseReducer = () => {
    const [mydata, dispatch] = useReducer(reducer, 0);
    return (
        <>
           <div className = "container">
              <h1>{mydata}</h1>
              <button className = "right" onClick ={()=>dispatch({type : "INCR"})}>INCR</button>
              <button className = "left" onClick = {()=>dispatch({type : "DECR"})}>DECR</button>
            </div> 
        </>
    )
}

export default UseReducer
