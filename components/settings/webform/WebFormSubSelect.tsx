import languages from "../../../library/languages";
import {
  Typography,
  Select,
  InputLabel,
  FormControl,
  Box,
  MenuItem
} from "@material-ui/core";

const WebFormSubSelect = ({ webFields, addHiddenSelect }: any) => {
  return webFields.some(e => e.fieldFormVisible === false && e.pause) ? (
    <Box mb="2rem">
      <Typography component="h4" variant="h6" gutterBottom>
        {languages.en.pleaseSelectOption}
      </Typography>
      <Box width="50%">
        <FormControl fullWidth>
          <InputLabel htmlFor="field-sub-select">
            {languages.en.fieldName}
          </InputLabel>
          <Select id="field-sub-select" onChange={addHiddenSelect} value="">
            {webFields.map(field =>
              field.pause
                ? field.fieldOptions.map(option => (
                    <MenuItem key={option.id} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))
                : null
            )}
          </Select>
        </FormControl>
      </Box>
    </Box>
  ) : null;
};

export default WebFormSubSelect;
