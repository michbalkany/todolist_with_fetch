import React from 'react'

export const Counter = (props) =>{
    
    const removeAllItems = () => {
	    props.setList([]);
  }
    return(
<div className="navbar px-5 footer">{props.list.length} item left  <button className="ms-auto" onClick={()=>removeAllItems()}>Remove all items</button></div>
    )
}