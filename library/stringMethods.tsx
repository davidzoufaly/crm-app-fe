class StringMethods {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  camelStringToText = () => {
    this.text = Array.from(this.text)
      .map(e => (e === e.toUpperCase() ? (e = `%-%${e.toLowerCase()}`) : e))
      .join("")
      .replace(/%-%/g, " ");

    return this;
  };

  firstCharUpperCase = () => {
    this.text = Array.from(this.text)
      .map((e, i) => (i === 0 ? e.toUpperCase() : e))
      .join("");

    return this;
  };

  removeSlash = () => {
    this.text = this.text.replace("/", "");
    return this;
  };

  addStringToEnd = (text: string) => {
    this.text = this.text + " " + text;
    return this;
  };

  textToCamelString = () => {
    let array = Array.from(this.text.toLowerCase());

    for (let i = 0; i < array.length; i++) {
      if (array[i] === " ") {
        array[i + 1] = array[i + 1].toUpperCase();
        array.splice(i, 1);
      }
    }
    this.text = array.join("");
    return this;
  };

  textToHtmlProp = () => {
    this.text = this.text.toLowerCase().replace(/ /g, '-');
    return this;
  }

  replaceStringDiacritics = () => {
    this.text = this.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return this;
  };

  getString = () => {
    return this.text;
  };
}

export default StringMethods;
