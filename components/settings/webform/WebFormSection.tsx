import WebForm from "./WebForm";
import languages from "../../../library/languages";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Checkbox, Typography, FormControlLabel, Box } from "@material-ui/core";

const WebFormSection = ({ state, dispatch, toggleSection, sections }: any) => (
  <Box my="2rem">
    <FormControlLabel
      control={
        <Checkbox
          name="webForm"
          onChange={toggleSection}
           // toggle visibility of section
          checked={sections.webForm !== undefined ? sections.webForm : true}
          icon={<KeyboardArrowRightIcon />}
          checkedIcon={<KeyboardArrowDownIcon />}
        />
      }
      label={
        <Typography variant="h4" component="h2">
          {languages.en.webForm}
        </Typography>
      }
    />
    {sections.webForm || sections.webForm === undefined ? <WebForm state={state} dispatch={dispatch} /> : null}
  </Box>
);

export default WebFormSection;
