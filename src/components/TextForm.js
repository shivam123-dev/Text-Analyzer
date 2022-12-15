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
  };
  const resetButton = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    tText: "Toggle Dark Mode",
  });

  const handleToggle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        tText: "Toggle Light Mode",
      });
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        tText: "Toggle Dark Mode",
      });
    }
  };

  return (
    <>
      <div>
        <h1 style={myStyle}>{props.heading}</h1>
        <button className="btn btn-primary mx-2" onClick={handleToggle}>
          {myStyle.tText}
        </button>
        <div className="form-floating my-3 py-1">
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            onChange={handleOnChange}
            placeholder="Enter your text here"
            style={myStyle}
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
        <button className="btn btn-danger mx-2" onClick={resetButton}>
          Clear Text
        </button>
      </div>
      <div style={myStyle}>
        <h2 className="my-3" style={myStyle}>
          Your text summary
        </h2>
        <p style={myStyle}>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h3 className="my-3" style={myStyle}>
          Preview
        </h3>
        <p style={myStyle}>{text}</p>
      </div>
    </>
  );
}
