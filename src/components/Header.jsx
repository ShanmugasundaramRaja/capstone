import { useState, React, useEffect } from "react";
import NewForm from "./NewForm";
import TodoList from "./TodoList";
import LeftToDo from "./LeftToDo";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Map from "./Map";
export default function Header() {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <NavBar />
      <div style={{ width: "100vw", display: "flex" }}>
        <div style={{ width: "25%" }} className="back2"></div>
        <div
          style={{
            width: "75%",

            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="back"
        >
          <NewForm
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
          <TodoList todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "25%" }} className="back2"></div>
        <div style={{ width: "75%" }} className="back">
          <Map />
        </div>
      </div>

      <Footer />
    </>
  );
}
