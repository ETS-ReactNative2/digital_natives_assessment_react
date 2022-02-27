import { useState } from "react";
import "./App.css";
import engine from "./Engine";
import icon from "./img/papir.png";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  //INPUT
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  //OUTPUT
  const printOutput = (e) => {
    e.preventDefault();
    setOutput(engine(input));
  };

  return (
    <div className="App">
      <h1 className="header-title">Numbers in words</h1>
      <img src={icon} alt="" className="icon" />
      <form>
        <div className="input-field">
          <input
            type="text"
            onChange={handleInputChange}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key) && !/[Enter]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <button className="submit" onClick={printOutput}>
            Submit
          </button>
        </div>
        <h2 className="output">{output}</h2>
      </form>
      <p className="credit">
        made by <i>Kristóf Fehér</i> for <i>Digital Natives</i> as a frontend
        developer assessment
      </p>
    </div>
  );
}

export default App;
