import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const inverse = () => {
    let newText = "";
    let i = 0;
    while (i < text.length) {
      let a = text.charAt(i);
      if (a === a.toUpperCase()) {
        a = a.toLowerCase();
      } else {
        a = a.toUpperCase();
      }
      newText += a;
      i += 1;
    }
    setText(newText);
    props.showAlert("Inversed the case!", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ] + /).join(" ");
    setText(newText);
    props.showAlert("Removed extra spaces!", "success");
  };
  const resetButton = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
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
        <button className="btn btn-primary mx-2" onClick={inverse}>
          Inverse Case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>
          Remove Spaces
        </button>
        <button className="btn btn-danger mx-2" onClick={resetButton}>
          Clear Text
        </button>
      </div>
      <div>
        <h2 className="my-3">Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h3 className="my-3">Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
