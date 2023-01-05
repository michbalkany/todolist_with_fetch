import React from "react";

export const List = (props) => {
  const removeItem = (index) => {
    const newArray = props.list.filter((item, i) => i !== index);
    props.setList(newArray);
    if (newArray.length == 0) {
      props.updateTodos([{ label: "sample Todo", done: false }]);
    } else {
      props.updateTodos(newArray);
    }
  };
  return (
    <ul className="px-5">
      {props.list.map((item, index) => {
        return (
          <li className="navbar item" key={index}>
            <h5>Task: {item.label}</h5>

            <h5>Status: {item.done?'done':'pending' }</h5>

            <button className="mouseOver" onClick={() => removeItem(index)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};
