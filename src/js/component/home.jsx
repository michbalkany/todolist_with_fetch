import React, { useState } from "react";
import {Input} from "./input.jsx"
import {List} from "./list.jsx"
import {Counter} from "./counter.jsx"

//create your first component
const Home = () => {
 
  const [list, setList] = useState([
    {'taskName':'do coding',
     'status': 'pending',
      'category': 'indoor',
    'priority': 'p1',
    }
  ]);

  return (
    <div className="text-center d-flex justify-content-center">
      <div className="TodoList">
        <h1>Todo List</h1>
		{/* Input component */}
        <Input list={list} setList={setList} />

		{/* List component */}
        <List list={list} setList={setList} />

		{/*Counter Component */}
        <Counter list={list} setList={setList} />
      </div>
    </div>
  );
};

export default Home;
