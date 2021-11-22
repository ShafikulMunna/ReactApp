import React from 'react'

const Navbar = ({list, filter}) => {
    return (
        <>
          <nav className = "navbar">
            <div className = "btn-group">
                {
                    list.map((curElem) =>{
                        return(
                            <>
                            <button className = "btn-group__item" onClick = {()=> filter(curElem)}>
                            {curElem}</button>
                            </>
                        )
                    })
                }
            </div>
        </nav>  
        </>
    )
}

export default Navbar
