import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const resetButton = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="form-floating my-3 py-1">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            onChange={handleOnChange}
            placeholder="Enter your text here"
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={resetButton}>
          Reset
        </button>
      </div>
      <div>
        <h2 className="my-3">Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h3 className="my-3">Preview</h3>
        <p>
            {text}
        </p>
      </div>
    </>
  );
}

