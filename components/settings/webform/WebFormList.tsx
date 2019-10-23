import languages from "../../../library/languages";

const WebFormList = ({ webFields, removeFromList }) => {
  const list = [];
  webFields.map(
    ({
      _id,
      fieldName,
      fieldInForm,
      fieldFormVisible,
      fieldOptions,
      fieldType,
      order
    }) => {
      const strFormVisible = fieldFormVisible
        ? ` - ${languages.en.visibleInForm}`
        : null;

      const strFormNotVisible1 = !fieldFormVisible
        ? fieldType === "select"
          ? ` - ${languages.en.hiddenInForm}`
          : null
        : null;

      const strFormNotVisible2 = !fieldFormVisible
        ? fieldType === "select"
          ? fieldOptions.map(e => (e.preselected ? e.value : null)).join("")
          : null
        : null;

      const strFormNotVisible3 = !fieldFormVisible
        ? fieldType === "select"
          ? languages.en.asPreselected
          : null
        : null;

      languages.en.asPreselected;

      fieldInForm
        ? (list[order] = (
            <li key={_id}>
              <strong>{fieldName}</strong>
              {strFormVisible}
              {strFormNotVisible1} <strong>{strFormNotVisible2}</strong>{" "}
              {strFormNotVisible3}
              <button id={fieldName} onClick={removeFromList}>
                X
              </button>
            </li>
          ))
        : [];
    }
  );

  return (
    <>
      <h3>{languages.en.selectedFields}:</h3>
      {webFields.some(e => e.fieldInForm) ? <ul>{list}</ul> : <p>No fields selected</p>}
    </>
  );
};

export default WebFormList;
