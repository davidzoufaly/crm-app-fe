import languages from "../../../library/languages";
import {
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box
} from "@material-ui/core";

const WebFormSelect = ({ webFields, addNotSelect }) => {
  const selectOptions = webFields.map(field => {
    return !field.fieldInForm &&
      field.fieldName !== "Date added" &&
      field.fieldName !== "Last modified" ? (
      <MenuItem key={field._id} value={field.fieldName} id={field.id}>
        {field.fieldName}
      </MenuItem>
    ) : null;
  });

  return (
    <Box mb="2rem">
      <Typography component="h3" variant="h5" gutterBottom>
        {languages.en.selectField}
      </Typography>
      {selectOptions.some(field => field !== null) ? (
        <FormControl fullWidth disabled={webFields.some(e => e.pause)}>
          <InputLabel htmlFor="field-select">
            {languages.en.fieldName}
          </InputLabel>
          <Select
            name="fields"
            id="field-select"
            onChange={addNotSelect}
            value=""
          >
            {selectOptions}
          </Select>
        </FormControl>
      ) : (
        <Typography>{languages.en.allFieldsSelected}</Typography>
      )}
    </Box>
  );
};

export default WebFormSelect;
