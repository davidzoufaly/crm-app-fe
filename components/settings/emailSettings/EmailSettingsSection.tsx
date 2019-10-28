import EmailSettingsForm from "./EmailSettingsForm";
import languages from "../../../library/languages";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Checkbox, Typography, FormControlLabel, Box } from "@material-ui/core";

const EmailSettingsSection = ({ username, pass, toggleSection, sections }: any) => {
  return (
    <Box my="2rem">
      <FormControlLabel
        control={
          <Checkbox
            onChange={toggleSection}
            name="emailSettings"
             // toggle visibility of section -> default visible
            checked={sections.emailSettings !== undefined ? sections.emailSettings : true}
            icon={<KeyboardArrowRightIcon />}
            checkedIcon={<KeyboardArrowDownIcon />}
          />
        }
        label={
          <Typography variant="h4" component="h2">
            {languages.en.emailAccount}
          </Typography>
        }
      />
      {sections.emailSettings || sections.emailSettings === undefined ? (
        <EmailSettingsForm username={username} pass={pass} />
      ) : null}
    </Box>
  );
};

export default EmailSettingsSection;
