import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import List from "./Components/List";
import Info from "./Components/Info";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
} from "react-router-dom";

function App() {

  // when the app starts, it checks whether there are any todos stored in the local storage. If there are, it retrieves them and sets them as the initial state of the todos. If there are no todos stored in the local storage, it sets an empty array as the initial state of the todos.
  // above procedure can also be done here but it is done in the List.js file

  // const storedTodos = localStorage.getItem('todos');
  // const initialTodos = storedTodos ? JSON.parse(storedTodos) : [];

  // const storedTodos = localStorage.getItem("todos");
  // let initialTodos = [];
  // if (storedTodos) {
  //   initialTodos = JSON.parse(storedTodos);
  // }

  // const [todos, setTodos] = useState(initialTodos);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);


  // to do above procedure in this file, we need to pass the "todos" and "setTodos" as props to the List.js file

  return (
    <Router>
      <Header />

      <Routes>
        {" "}
        {/* Use Routes instead of Switch */}
        <Route
          path="/List"
          element={<List  />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
