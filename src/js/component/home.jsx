import React, { useEffect, useState } from "react";
import { Input } from "./input.jsx";
import { List } from "./list.jsx";
import { Counter } from "./counter.jsx";

//create your first component
const Home = () => {
  const apiUrl = "https://assets.breatheco.de/apis/fake/todos/user/mich";
  function getTodo() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((err) => console.error(err));
  }
  const [list, setList] = useState([]);
  useEffect(() => {
    getTodo();
  }, []);
  function updateTodos(newList) {
    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((response) => console.log(response.json()))
      .catch((err) => console.error(err));
  }
  return (
    <div className="text-center d-flex justify-content-center">
      <div className="TodoList">
        <h1>Todo List</h1>
        {/* Input component */}
        <Input list={list} setList={setList} updateTodos={updateTodos} />

        {/* List component */}
        <List list={list} setList={setList} updateTodos={updateTodos} />

        {/*Counter Component */}
        <Counter list={list} setList={setList} updateTodos={updateTodos} />
      </div>
    </div>
  );
};

export default Home;
