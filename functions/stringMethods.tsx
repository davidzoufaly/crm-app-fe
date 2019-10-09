class stringMethods {
    text : string;
    private helperArray : number[];

    constructor(text : string) {
      this.text = text;
      this.helperArray = [];
    }
    
    getIndexUpperCase = () => {
      const textInArray = Array.from(this.text);
  
      for (let i = 0; i < textInArray.length; i++) {
        if (textInArray[i] === textInArray[i].toUpperCase()) {
          this.helperArray.push(i);
        }
      }
      return this;
    };
  
    splitStringByIndex = () => {
      let arrayText = [];
  
      for (let i = 0; i <= this.helperArray.length; i++) {
        if (i === 0) {
          //first iteration
          arrayText.push(this.text.substr(0, this.helperArray[i]));
        } else if (i > 0 && i < this.helperArray.length) {
          //iteration in the middle
          arrayText.push(this.text.substr(this.helperArray[i - 1], this.helperArray[i] - this.helperArray[i - 1]));
        } else if (i === this.helperArray.length) {
          //last iteration
          arrayText.push(this.text.substr(this.helperArray[i - 1]));
        }
      }
      this.text = arrayText.join(" ");
  
      return this;
    };
  
    firstCharUpperCase = () => {
      let str = this.text.toLowerCase();
      const firstCharString = str.substr(0, 1).toUpperCase();
      const restString = str.substr(1);
      this.text = firstCharString + restString;
      return this;
    };

    removeSlash = () => {
        this.text = this.text.replace('/', '');
        return this;
    }

    addStringToEnd = (text: string) => {
        this.text = this.text.concat(` ${text}`);
        return this;
    }
  };

  export default stringMethods;