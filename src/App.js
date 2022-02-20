import { useState } from 'react';
import './App.css';

let numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];


function App() {
  const [ input, setInput ] = useState("");
  const [ output, setOutput ] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value)
  }

  const printOutput = (e) => {
    e.preventDefault();
    setOutput(input)
  }

  //1-19
    let result = input.slice("")

  console.log(result);

  return (
    <div className="App">
      <form>
        <input type="text" onChange={handleInputChange} />
        <button className={"submit"} onClick={printOutput} >SUBMIT</button>
        <h2 className={"output"}>{output}</h2>
    </form>
    </div>
  );
}

export default App;
