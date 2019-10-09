class stringMethods {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  splitCamelString = () => {
    this.text = Array.from(this.text)
      .map(e => (e === e.toUpperCase() ? (e = `%-%${e.toLowerCase()}`) : e))
      .join("")
      .replace(/%-%/g, " ");

    return this;
  };

  firstCharUpperCase = () => {
    this.text = Array.from(this.text)
        .map((e, i) => i === 0 ? e.toUpperCase() : e)
        .join("")

    return this;
  };

  removeSlash = () => {
    this.text = this.text.replace("/", "");
    return this;
  };

  addStringToEnd = (text: string) => {
    this.text = this.text.concat(` ${text}`);
    return this;
  };
}

export default stringMethods;
