import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
export default function App() {
  return (
    <>
      <Navbar title="Text Analyzer" homeText="Home" aboutText="About"/>
      <div className="container my-3">
        <TextForm heading="Enter text to analyze"/>
      </div>
    </>
  );
}

