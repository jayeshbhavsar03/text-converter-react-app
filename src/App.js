import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343d3f";
      showAlert("Dark mode is on", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is on", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Converter"
          aboutText="About Us"
          mode={mode}
          toogleMode={toogleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes >
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter Your Text Here:"
                mode={mode}
              />} >
            </Route>
          </Routes >
        </div>
      </Router>
    </>
  );
}

export default App;
