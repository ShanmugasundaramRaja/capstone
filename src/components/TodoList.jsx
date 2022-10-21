import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

export default function TodoList({ todo, setTodo, setEditTodo }) {
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((elem) => elem.id !== id));
    alert("Deleted!");
  };

  const handleEdit = ({ id }) => {
    const findTodo = todo.find((elem) => elem.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div style={{ minHeight: "400px" }}>
      {todo.map((elem) => (
        <li key={elem.id} style={{ listStyle: "none" }}>
          <input
            type="text"
            className="inputs2 mt-2 mb-2"
            value={elem.title}
            onChange={(event) => event.preventDefault()}
          />
          <span className="inputs2 ml-2">
            <MdEdit onClick={() => handleEdit(elem)} />
          </span>
          <span className="inputs2 ml-2">
            <MdDelete onClick={() => handleDelete(elem)} />
          </span>
        </li>
      ))}
    </div>
  );
}
