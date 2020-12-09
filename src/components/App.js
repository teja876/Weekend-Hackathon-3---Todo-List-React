import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [listOfitems, setlistOfitems] = useState([]);
  const [save, setsaveButton] = useState("");
  const [editinput, seteditinput] = useState("");

  const handleChange = (event) => {
    let newInput = event.target.value;
    setInputText(newInput);
  };

  const handleAdd = () => {
    if (inputText === "") return;
    setlistOfitems((previtems) => [...previtems, inputText]);
    setInputText("");
  };

  const handleDelete = (id) => {
    const restAfterremove = listOfitems.filter((todo, index) => index !== id);
    setlistOfitems(restAfterremove);
  };

  const handleEdit = (id) => {
    setsaveButton(id);
  };
  const handleEditChange = (event) => {
    seteditinput(event.target.value);
  };

  const handleSave = (id) => {
    if (editinput === "") return;
    listOfitems[id] = editinput;
    seteditinput("");
    setsaveButton("");
  };

  return (
    <div id="main">
      <textarea
        rows="4"
        cols="50"
        id="task"
        type="text"
        onChange={handleChange}
        value={inputText}
      />
      <button id="btn" onClick={handleAdd}>
        Add
      </button>
      <ol>
        {listOfitems.map((item, index) => (
          <li key={index}>
            <span className="list">{item}</span>
            <button className="delete" onClick={() => handleDelete(index)}>
              Delete
            </button>
            <button className="edit" onClick={() => handleEdit(index)}>
              Edit
            </button>
            {save === index && (
              <>
                <textarea
                  value={editinput}
                  onChange={handleEditChange}
                  className="editTask"
                  rows="4"
                  cols="50"
                ></textarea>
                <button className="saveTask" onClick={() => handleSave(index)}>
                  Save
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default App;
