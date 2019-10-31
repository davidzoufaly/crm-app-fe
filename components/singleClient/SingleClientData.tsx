import globalVars from "../../library/globalVariables";
import stringMethods from "../../library/stringMethods";
import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel
} from "@material-ui/core";

const SingleClientData = ({ fieldsData, client, onInputChange }: any) =>
  fieldsData.map(field => {
    switch (field.fieldType) {
      case "text":
        return (
          <TextField
            key={field.fieldName}
            name={field.fieldName}
            label={field.fieldName}
            fullWidth
            margin="normal"
            value={client[field.fieldName] || ""}
            onChange={onInputChange}
            disabled={
              field.fieldName === "Date added" ||
              field.fieldName === "Last modified"
            }
          />
        );
      case "number":
        return (
          <TextField
            fullWidth
            key={field.fieldName}
            label={field.fieldName}
            type="number"
            margin="normal"
            name={field.fieldName}
            value={client[field.fieldName] || ""}
            onChange={onInputChange}
          />
        );
      case "select":
        const fieldNameAsHtml = new stringMethods(field.fieldName)
          .textToHtmlProp()
          .getString();
        return (
          <FormControl key={field.fieldName} fullWidth margin="normal">
            <InputLabel htmlFor={fieldNameAsHtml}>{field.fieldName}</InputLabel>
            <Select
              name={field.fieldName}
              value={client[field.fieldName] || ""}
              onChange={onInputChange}
              id={fieldNameAsHtml}
            >
              <MenuItem key={globalVars.blankOption} value="">
                {globalVars.blankOption}
              </MenuItem>
              {field.fieldOptions.map(option => (
                <MenuItem key={option.id} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
    }
  });

export default SingleClientData;
