class StringMethods {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }
  // thisIsText -> This is text
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

  // This is text -> thisIsText
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

  // This is text -> this-is-text
  textToHtmlProp = () => {
    this.text = this.text.toLowerCase().replace(/ /g, '-');
    return this;
  }

  // čřěř.. -> crer
  replaceStringDiacritics = () => {
    this.text = this.text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return this;
  };

  // settings/12415 -> settings
  removeSlashAndTextAfter = () => {
    this.text = this.text.substring(0, this.text.indexOf("/"));
    return this;
  }

  getString = () => {
    return this.text;
  };
}

export default StringMethods;
