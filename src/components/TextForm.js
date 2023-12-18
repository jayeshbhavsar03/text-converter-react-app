import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text convert to Upper Case", "success");
  };
  const handelLowClick = () => {
    // console.log("Lowercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text convert to Lower Case", "success");
  };
  const handelClearClick = () => {
    // console.log("Lowercase was clicked: " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text clear from text box", "warning");
  };
  const handelSentenceClick = () => {
    // console.log("Lowercase was clicked: " + text);
    // const lower = word.toLowerCase();
    // return lower.charAt(0).toUpperCase() + lower.slice(1);
    let newText = text.toLowerCase();
    setText(newText.charAt(0).toUpperCase() + newText.slice(1));
    props.showAlert("Text convert in sentance form", "success");
  };
  const handelOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text are succusfully copy", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra spaces from text", "success");
  };
  const [text, setText] = useState("");
  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <div className="container" >
        <h1>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handelOnChange}
            rows="8"
            style={{backgroundColor: props.mode==='dark'?'#2b3035':'white', color: props.mode === "dark" ? "white" : "black"}}
          />
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handelSentenceClick}>
          Convert To Sentence
        </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handelUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handelLowClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-success mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-danger mx-1 my-1" disabled={text.length===0} onClick={handelClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary:</h1>
        <p>
          <b>Words: </b> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
          {/* <b>Words: </b> {text.trim() === '' ? 0 : text.match(/\S+/g).length} */}
        </p>
        <p>
          <b>Characters: </b> {text.length}
        </p>
        <p>Minutes to read: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
        <h3>Preview:</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Set heading here",
};
