const varToString = (text : string) => {
    const textArray = Array.from(text);
  
    const getIndexUpperCase = (textInArray : string[]) => {
      let indexUpperCaseLetters = [];
  
      for (let i = 0; i < textInArray.length; i++) {
        if (textInArray[i] === textInArray[i].toUpperCase()) {
          indexUpperCaseLetters.push(i);
        }
      }
      return indexUpperCaseLetters;
    };
  
    const indexArray = getIndexUpperCase(textArray);
  
    const splitStringByIndex = (iArray : number[], txt : string) => {
      let arrayText = [];
  
      for (let i = 0; i <= iArray.length; i++) {
        if (i === 0) {
          //first iteration
          arrayText.push(txt.substr(0, iArray[i]));
        } else if (i > 0 && i < iArray.length) {
          //iteration in the middle
          arrayText.push(txt.substr(iArray[i - 1], iArray[i] - iArray[i - 1]));
        } else if (i === iArray.length) {
          //last iteration
          arrayText.push(txt.substr(iArray[i - 1]));
        }
      }
      return arrayText.join(" ");
    };
  
    const splitString = splitStringByIndex(indexArray, text);
  
    const firstCharUpperCase = (string : string) => {
      let str = string.toLowerCase();
      const firstCharString = str.substr(0, 1).toUpperCase();
      const restString = str.substr(1);
      return firstCharString + restString;
    };

    const caseCorrectString = firstCharUpperCase(splitString);
  
    return caseCorrectString;
  };

export default varToString;