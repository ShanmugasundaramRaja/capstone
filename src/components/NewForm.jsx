import { React } from "react";
import { v4 as uuidV4 } from "uuid";
import { useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { usePlacesWidget } from "react-google-autocomplete";

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
      setTodo([
        ...todo,
        { id: uuidV4(), title: input, day: 1, time: "9:00AM" },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id);
    }
  };
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDUHuPPzwN-8fCOaw-hhtpZkvs9Stnp83s",
  });

  return (
    <form className="mt-2 mb-2">
      <input
        type="text"
        ref={ref}
        className="inputs3"
        value={input}
        onChange={onInputChange}
        placeholder="Enter your plans"
        style={{ width: "83%", border: "3px solid DodgerBlue" }}
      />

      <span className="inputs2 ml-4">
        <MdAdd
          size="3rem"
          className="ics delaccept del delup "
          style={{ border: "3px solid white", borderRadius: "5px" }}
          onClick={onFormSubmit}
        />
      </span>
    </form>
  );
}
