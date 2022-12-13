import React, { useState } from "react";
import "../App.css";
export default function TextForm(props) {
  const handleOnClick = () => {
    // console.log("Button Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("Update on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="form-floating my-3 py-1">
        <textarea
          className="form-control"
          value={text}
          id="mybox"
          onChange={handleOnChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleOnClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
