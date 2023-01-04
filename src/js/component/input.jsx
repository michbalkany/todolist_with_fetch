import React, {useState} from "react";

export const Input = (props)=>{
  // declare variables
    const [inputValue, setInputValue] = useState("");


    // Declare Functions 
    const addNewItem = (e) => {
        if (e.keyCode == 13) {
          const newTodo = [...props.list, {'taskName':inputValue,
        'status': 'pending',
        
      }];
          props.setList(newTodo);
          console.log(props.list);
          setInputValue("");
        }
      };
// fill in the return 
    return(
        <div>
            <input
          className="content"
          value={inputValue}
          placeholder="Set your Todo List"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={addNewItem}
          // onChange={handleChange}
        />
        </div>
    )
       
}