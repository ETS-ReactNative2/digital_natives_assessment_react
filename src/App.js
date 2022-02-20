import { useState } from 'react';
import './App.css';

let numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];


function App() {
  const [ input, setInput ] = useState("");
  const [ output, setOutput ] = useState("");

  //INPUT
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value)
  }

  //basics
    let inputLength = input.length;
    let inputSplit = input.split("");

  //Create TENNERS
  let singular = inputSplit.slice(inputLength -1);
  let doublefigures = inputSplit.slice(inputLength -2, -1);
  let doubles =  doublefigures + singular;

  let twoFigures = function(n) {
    let arr = n.length === 2 ? n.split("") : n;
    let tenner = arr[0] > 0 ? tens[arr[0]] : "";
    let single = arr[1] > 0 ? numbers[arr[1]] : "";
    let hasDoubleFigures = arr[0] > 0 && arr[1] > 0 ? "-" : "";

    if(n > 19) {
        return tenner + hasDoubleFigures + single;
    } else return numbers[Math.round(n *1)];
  }

  //Create HUNDREDS
  let hundreds = inputSplit.slice(inputLength -3, -2);
  let threeFigures = function(n) {
    if(n > 0) { return numbers[n] + " hundred " 
    } else return ""
  } 

  //Create THOUSANDS
  let thousands = inputLength < 5 ? inputSplit.slice(inputLength -4, -3).join("") : inputSplit.slice(inputLength -5, -3).join("");
  let fourFigures = function(n) {
    if(n > 0) { return twoFigures(n) + " thousand " 
    } else return ""
  } 
  //Houndred Thousands...
  let hundredThousands = inputSplit.slice(inputLength -6 , -5);

  //Millions :)
  let millions = inputSplit.slice(inputLength -7 && -8, -6).join("");
  console.log(millions);
  let thoseMillions = function(n) {
    if(n > 0) { return twoFigures(n) + " million " 
    } else return ""
  } 

  //And(s)?
  let earlyGame = doublefigures > 0 && inputLength > 3 ? "and " : "";
  let lessEarlyGame = inputLength > 5 ? "and " : "";
    
  //RESULT
    let result = 
      thoseMillions(millions) +
      threeFigures(hundredThousands) + 
      lessEarlyGame +
      fourFigures(thousands) + 
      threeFigures(hundreds) + 
      earlyGame + 
      twoFigures(doubles);

  
  //OUTPUT
  const printOutput = (e) => {
    e.preventDefault();
    setOutput(result)
  }

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
