import CustomFields from "./CustomFields";
import languages from "../../../library/languages";
import { Checkbox, Typography, FormControlLabel, Box } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const CustomFieldsSection = ({
  toggleSection,
  addField,
  deleteField,
  sections,
  fields
}: any) => (
  <Box my="2rem">
    <FormControlLabel
      control={
        <Checkbox
          onChange={toggleSection}
          name="customFields"
          id="custom-fields"
          // toggle visibility of section
          checked={sections.customFields !== undefined ? sections.customFields : true}
          icon={<KeyboardArrowRightIcon />}
          checkedIcon={<KeyboardArrowDownIcon />}
        />
      }
      label={
        <Typography variant="h4" component="h2">
          {languages.en.customClientFields}
        </Typography>
      }
    />
    {sections.customFields || sections.customFields === undefined ? (
      <CustomFields fields={fields} addField={addField} deleteField={deleteField}/>
    ) : null}
  </Box>
);

export default CustomFieldsSection;
