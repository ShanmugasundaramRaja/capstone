import { React } from "react";
import { v4 as uuidV4 } from "uuid";
import { useEffect } from "react";
import { MdAdd } from "react-icons/md";

export default function NewForm({
  input,
  setInput,
  todo,
  setTodo,
  editTodo,
  setEditTodo,
}) {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id) => {
    const newTodo = todo.map((elem) => (elem.id === id ? { title, id } : elem));
    setTodo(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodo([...todo, { id: uuidV4(), title: input }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id);
    }
  };

  return (
    <form className="mt-2 mb-2">
      <input
        type="text"
        className="inputs3"
        value={input}
        onChange={onInputChange}
        placeholder="Enter your plans"
      />
      <span className="inputs2 ml-3">
        <MdAdd onClick={onFormSubmit} />
      </span>
    </form>
  );
}
