import { useState, React, useEffect } from "react";
import NewForm from "./NewForm";
import TodoList from "./TodoList";
import LeftToDo from "./LeftToDo";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Map from "./Map";
import { GoGlobe } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const initialState = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const navigate = useNavigate();
  const map = () => {
    navigate("/map");
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "100%",

            display: "flex",

            flexDirection: "column",
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
          <button className="delonly2 btn " onClick={map}>
            Map view
            <GoGlobe className="delsub ml-4" size="2rem" />
          </button>
        </div>
      </div>
    </>
  );
}
