import languages from "../../../library/languages";

const WebFormSubSelect = ({ webFormOptions, webFields, addHiddenSelect } : any) => {
  return webFields.some(e => e.fieldFormVisible === false && e.pause) ? (
    <>
      <p>{languages.en.pleaseSelectOption}</p>
      <select onChange={addHiddenSelect}>{webFormOptions}</select>
    </>
  ) : null;
};

export default WebFormSubSelect;
