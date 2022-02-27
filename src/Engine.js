function engine(n) {

    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tenners = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    const theBigGuns = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];

    
    let input = String(n)
    let inputSplit = input.split("");
    
  //RESULT
    let result = ""
    if(input > 0) {
        let mapedInput = inputSplit.map(n => n);
        let reversedMapedInput = mapedInput.reverse().join("");
        let devidedEachThird = reversedMapedInput.match(/.{1,3}/g);

        function threeFigures(n) {
          let arr = String(n).split("").reverse();
          
          let ones = arr.slice(-1);
          let tens = arr.slice(-2, -1);
          let huns = arr.slice(-3, -2);
          
          let isTenner = [tens, ones];
          
          //AND
          let and = isTenner.join("") > 0 && arr.length === 3 ? "and " : "";
          
          let hunner = huns > 0 ? numbers[huns] + ' hundred ' : "";
          let twinner = ones > 0 && tens > 0 ? tenners[tens] + '-' : tenners[tens];
          let single = ones === 0 ? '' : numbers[ones];

          if(isTenner.join("") < 20) {
                twinner = "";
                single = numbers[Math.round(isTenner.join("") *1)];
              } 
          return hunner + and + twinner + single
          }

        //From 100 to the sky
        if(n < 1000) {
          result = threeFigures(devidedEachThird[0]).trim();
        } else {
          result = devidedEachThird.map((num, i) => num > 0 ? `${threeFigures(num).trim()} ${theBigGuns[i]} ` : "").reverse().join("").trim();
        }

    } else if (input === "0") {
        result = "zero"
    } 
    return result;
}

module.exports = engine;