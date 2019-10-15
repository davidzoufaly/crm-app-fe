import SelectFieldOptions from "../components/SelectFieldOptions";

const AddOrEditField = ({ editedField, onNameChange, onSelectChange, onOptionChange, onOptionDelete, handleOptionSpawn, saveEditedField, displayComponent, changeDisplayComponent }: any) => {

  return displayComponent ? (
    <div>
      <label htmlFor="field-name">Field name</label>
      <input
        type="text"
        id="field-name"
        defaultValue={editedField.fieldName}
        onChange={onNameChange}
      />
      <label htmlFor="field-type">Field type</label>
      <select id="field-type" onChange={onSelectChange} defaultValue={editedField.fieldType}> 
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="select">Select</option>
      </select>
      <SelectFieldOptions
        options={editedField.fieldOptions}
        onOptionChange={onOptionChange}
        onOptionDelete={onOptionDelete}
      />
      {editedField.fieldType === "select" ? (
        <button onClick={handleOptionSpawn}>New</button>
      ) : null}
      <button onClick={saveEditedField}>Save</button>
      <button onClick={changeDisplayComponent}>Cancel</button>
    </div>
  ) : (<button onClick={changeDisplayComponent}>Add new field</button>);
};

export default AddOrEditField;
