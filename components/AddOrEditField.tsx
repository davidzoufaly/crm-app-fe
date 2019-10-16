import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Fab from '@material-ui/core/Fab';

const AddOrEditField = ({ editedField, displayComponent, fieldMethods, handleOption }: any) => {

  return displayComponent ? (
    <div>
      <h2>{editedField.id ? "Edit custom field" : "New custom field"}</h2>
      <label htmlFor="field-name">Field name</label>
      <input
        type="text"
        id="field-name"
        value={editedField.fieldName}
        onChange={fieldMethods.onNameChange}
      />
      <label htmlFor="field-type">Field type</label>
      <select id="field-type" onChange={fieldMethods.onSelectChange} value={editedField.fieldType}> 
        <option value="text">Text</option>
        <option value="select">Select</option>
        <option value="number">Number</option>
      </select>
      {handleOption}
      {editedField.fieldType === "select" ? (
        <button onClick={fieldMethods.handleOptionSpawn}>New</button>
      ) : null}
      <button onClick={fieldMethods.saveEditedField}>Save</button>
      <button onClick={fieldMethods.toggleDisplayComponent}>Cancel</button>
    </div>
  ) : (<div><Fab color="primary" aria-label="add" onClick={fieldMethods.toggleDisplayComponent}><AddIcon/></Fab><Typography>Add new field</Typography></div>);
};

export default AddOrEditField;
