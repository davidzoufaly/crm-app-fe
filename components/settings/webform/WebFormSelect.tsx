import globalVars from "../../../library/globalVariables";
import languages from "../../../library/languages";

const WebFormSelect = ({ webFields, addNotSelect }) => {
  const selectOptions = webFields.map(field => {
    return !field.fieldInForm &&
      field.fieldName !== globalVars.permanentFields.dateAdded &&
      field.fieldName !== globalVars.permanentFields.lastModified ? (
      <option key={field._id} value={field.fieldName} id={field.id}>
        {field.fieldName}
      </option>
    ) : null;
  });

  return selectOptions.some(field => field !== null) ? (
    <>
      <h3>{languages.en.selectField}:</h3>
      <select name="fields" onChange={addNotSelect} disabled={webFields.some(e => e.pause)}>
        <option key={globalVars.blankOption}>{globalVars.blankOption}</option>
        {selectOptions}
      </select>
    </>
  ) : <p>{languages.en.allFieldsSelected}</p>;
};

export default WebFormSelect;
