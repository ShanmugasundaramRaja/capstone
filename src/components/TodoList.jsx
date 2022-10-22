import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

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
            style={{ width: "70%" }}
          />
          <span
            className=" del delaccept delup  ml-2 p-2"
            style={{ border: "3px solid white", borderRadius: "10px" }}
          >
            <MdEdit
              className="delaccept ics"
              size="1.5rem"
              onClick={() => handleEdit(elem)}
            />
          </span>
          <span
            className="del delup p-2 ml-2"
            style={{ border: "3px solid white", borderRadius: "10px" }}
          >
            <AiFillDelete
              className="delaccept dell"
              size="1.5rem"
              onClick={() => handleDelete(elem)}
            />
          </span>
        </li>
      ))}
    </div>
  );
}
