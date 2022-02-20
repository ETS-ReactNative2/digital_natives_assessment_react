function engine(n) {

    let numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

    
    let input = String(n)
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
        console.log(n);
        let isZero = n == 0 ? "thousand " : " thousand ";
        if(n > 0 || inputLength > 3) { return twoFigures(n) + isZero;
        } else return ""
    } 
  //Houndred Thousands...
    let hundredThousands = inputSplit.slice(inputLength -6 , -5);

  //Millions :)
    let millions = inputSplit.slice(inputLength -7 && -8, -6).join("");
    let thoseMillions = function(n) {
        if(n > 0) { return twoFigures(n) + " million " 
        } else return ""
    } 

  //And(s)?
    let earlyGame = Math.round(doubles * 1) > 0 && inputLength > 3 ? "and " : "";
    let lessEarlyGame = inputLength > 5 && thousands > 0 ? "and " : "";
    
  //RESULT
    let result = ""
    if(input > 0 && inputLength < 9) {
        result = 
        thoseMillions(millions) +
        threeFigures(hundredThousands) + 
        lessEarlyGame +
        fourFigures(thousands) + 
        threeFigures(hundreds) + 
        earlyGame + 
        twoFigures(doubles);
    } else if (input === "0") {
        result = "zero"
    } else if (input.length > 8) {
        result = "not possible"
    }
    return result;
}

module.exports = engine;