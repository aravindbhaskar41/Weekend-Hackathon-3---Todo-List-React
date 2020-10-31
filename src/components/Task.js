import React, { useState } from "react";

export default function Task(props) {
  const [text, setText] = useState(props.text);
  const [disabled, setDisabled] = useState(props.disabled);
  const [buttonDisabled, setButtonDisable] = useState(
    Boolean(props.buttonDisabled)
  );
  const handleEdit = () => {
    setDisabled(!disabled);
  };

  const handleChange = (event) => {
    if (event.target.value.length === 0) {
      //console.log("Empty String");
      setButtonDisable(Boolean(true));
    } else setButtonDisable(Boolean(false));
    setText(event.target.value);
    //console.log("new text", text);
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={disabled}
      ></textarea>
      {/*console.log("Inside Task", text, disabled, buttonDisabled)*/}
      <button
        className={disabled === false ? "saveTask" : "editTask"}
        onClick={handleEdit}
        disabled={buttonDisabled}
      >
        {disabled === false ? "Save" : "Edit"}
      </button>
    </>
  );
}
