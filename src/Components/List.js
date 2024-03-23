import React, { useState } from "react";

const List = () => {
  const [todoInput, setTodoInput] = useState("");

  // when this component is rendered for the first time, it checks whether there are any todos stored in the local storage. If there are, it retrieves them and sets them as the initial state of the todos. If there are no todos stored in the local storage, it sets an empty array as the initial state of the todos.
  const storedTodos = localStorage.getItem("todos");
  let initialTodos = [];
  if (storedTodos) {
    initialTodos = JSON.parse(storedTodos);
  }

  const [todos, setTodos] = useState(initialTodos);
  const style = {
    spacing: {
      margin: "10px",
      width: "600px",
    },
    middle: {
      minHeight: "calc(86vh - 35px)",
      padding: "10px",
    },
    completed: {
      textDecoration: "line-through",
    },
    clr: {
      backgroundColor: "#eb5c08d1",
    },
  };

  // function to add a new todo to the list
  const handleAddTodo = () => {
    if (todoInput.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        description: todoInput.trim(),
        check: false,
      };
      setTodos([...todos, newTodo]);
      setTodoInput("");

      // also upadte the local storage with the new todo when a new todo is added
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    } else {
      alert("Please enter a todo");
    }
  };

  // function to delete a todo from the list
  const DeleteTodo = (id) => {
    //The filter method is used to create a new array (updatedTodos) that includes all todos except the one with the specified id.
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    //In the context of reindexing todos after deleting one, adding 1 to the index is a way to start the ids from 1 instead of 0 as the value of index is 0 viz the index of the array starting from 0
    // the id of each todo is updated from 1 to so on... In short the id of each todo is updated after deleting a todo from 1 to so on...
    //in the map function, the first argument represents the current element of the array being processed (in this case, a todo object), and the second argument represents the index of that element in the array.
    const reindexedTodos = updatedTodos.map((todo, index) => ({
      ...todo,
      id: index + 1,
    }));
    setTodos(reindexedTodos);

    // also update the local storage with the updated todos when a todo is deleted
    localStorage.setItem("todos", JSON.stringify(reindexedTodos));
  };

  // function to change the input text in the input field
  const ChangeInputText = (e) => {
    setTodoInput(e.target.value);
  };

  // function to toggle the check property of a todo
  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map(
      (todo) =>
        //If the id matches, it creates a new todo object { ...todo, completed: !todo.completed }, where completed is toggled to its opposite value (if completed was true, it becomes false, and vice versa). If the id doesn't match, it returns the original todo object.
        todo.id === id ? { ...todo, check: !todo.check } : todo
      //in above code " check: !todo.check" means that if the check is true it becomes false and vice versa
    );
    setTodos(updatedTodos);
  };

  return (
    <div
      style={{ ...style.spacing, ...style.middle }}
      className="mx-auto p-4 bg-white rounded-xl d-flex flex-column space-y-4"
    >
      <h2 className="text-center">Todo List</h2>
      <div className="d-flex align-items-center my-4 mx-auto">
        <input
          type="text"
          placeholder="Enter your todo"
          className="flex-grow border border-gray-300 rounded-md py-2 px-3 mr-4"
          value={todoInput}
          onChange={ChangeInputText}
          // above ChangeInputText function is called to show input value is changed and is reflected in the input field at runtime and is stored in "todoInput" state variable
        />
        <button
          style={style.clr}
          className="btn btn-primary px-4 py-2 rounded-md mx-3"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="list-group">
        {todos.map((myvalue) => (
          <li
            key={myvalue.id}
            className={`list-group-item d-flex justify-content-between align-items-center border-bottom ${
              myvalue.check ? "completed" : ""
              // above "completed" class,added to the list item, will add the line-through to the list
              // and in below code the "completed" class,added to the span item,will add the line-through to the description
              // it is necessary to add the "completed" class to both the span item and the list item because the line-through style needs to be applied to the description as well as on list item
            }`}
          >
            <label className="cursor-pointer">
              <input
                type="checkbox"
                className="mr-4 mx-3"
                checked={myvalue.check}
                onChange={() => handleToggleTodo(myvalue.id)}
              />
              <span style={myvalue.check ? style.completed : {}}>
                {myvalue.id} {myvalue.description}
              </span>
            </label>
            <button
              style={style.clr}
              className="btn btn-danger px-4 py-2 rounded-md"
              onClick={() => DeleteTodo(myvalue.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
