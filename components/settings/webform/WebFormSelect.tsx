import globalVars from "../../../library/globalVariables";

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
      <select name="fields" onChange={addNotSelect} disabled={webFields.some(e => e.pause)}>
        <option key={globalVars.blankOption}>{globalVars.blankOption}</option>
        {selectOptions}
      </select>
    </>
  ) : <p>All fields selected</p>;
};

export default WebFormSelect;
