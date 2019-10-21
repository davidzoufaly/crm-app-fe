import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import stringMethods from "../../../library/stringMethods";
import languages from "../../../library/languages";

const AddOrEditField = ({
  editedField,
  displayComponent,
  fieldMethods,
  handleOption
}: any) => {
  return displayComponent ? (
    <form onSubmit={fieldMethods.saveEditedField}>
      <h2>
        {editedField.id
          ? languages.en.editCustomField
          : languages.en.newCustomField}
      </h2>
      <label
        htmlFor={new stringMethods(languages.en.fieldName)
          .textToHtmlProp()
          .getString()}
      >
        {languages.en.fieldName}
      </label>
      <input
        type="text"
        id={new stringMethods(languages.en.fieldName)
          .textToHtmlProp()
          .getString()}
        autoFocus={true}
        value={editedField.fieldName}
        onChange={fieldMethods.onNameChange}
      />
      <label
        htmlFor={new stringMethods(languages.en.fieldType)
          .textToHtmlProp()
          .getString()}
      >
        {languages.en.fieldType}
      </label>
      <select
        id={new stringMethods(languages.en.fieldType)
          .textToHtmlProp()
          .getString()}
        onChange={fieldMethods.onSelectChange}
        value={editedField.fieldType}
      >
        <option value="text">{languages.en.text}</option>
        <option value="select">{languages.en.select}</option>
        <option value="number">{languages.en.number}</option>
      </select>
      {editedField.fieldType === "select" ? handleOption : null}
      <button type="submit">{languages.en.save}</button>
      <button onClick={fieldMethods.toggleDisplayComponent}>
        {languages.en.cancel}
      </button>
    </form>
  ) : (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        onClick={fieldMethods.toggleDisplayComponent}
      >
        <AddIcon />
      </Fab>
      <Typography>{languages.en.addNewField}</Typography>
    </div>
  );
};

export default AddOrEditField;
