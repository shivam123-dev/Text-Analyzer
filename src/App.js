import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
export default function App() {
  const [mode, setMode] = useState("light");
  const [toggleMode, setToggleMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState("black");
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  
  const handleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#031d44";
      document.body.style.color = "white";
      setToggleMode("light");
      setMode("dark");
      showAlert("Enabled Dark Mode!", "success");
      setBgColor("#031d44");
      setColor("white");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setToggleMode("dark");
      setMode("light");
      showAlert("Enabled Light Mode!", "success");
      setBgColor('white');
      setColor("black");
    }
  };

  return (
    <>
      <Navbar
        title="Text Analyzer"
        homeText="Home"
        aboutText="About"
        mode={mode}
        handleMode={handleMode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter text to analyze"
          showAlert={showAlert}
          bgColor={bgColor}
          color={color}
        />
      </div>
    </>
  );
}
