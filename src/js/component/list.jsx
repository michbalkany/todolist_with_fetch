import React from 'react' 

export const List = (props)=>{
    const removeItem = (index) => {
        const newArray = props.list.filter((item, i) => i !== index);
        props.setList(newArray);
      };
return (
<ul className="px-5">
          
          {props.list.map((item, index) => {
            return (
              <li className="navbar item" key={index}>
                <h5>Task: {item.taskName}</h5> 
               
               <h5>Status: {item.status}</h5>
                
                <button
                  className="mouseOver"
                  
                  onClick={() => removeItem(index)}

                >X</button>
              </li>
            );
          })}
        </ul>
)
    
}