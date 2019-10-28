import languages from "../../library/languages";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Checkbox, Typography, FormControlLabel, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const DefaultClientFieldsSection = ({
  fields,
  toggleSection,
  sections
}: any) => {
  const defaultFieldNames = fields
    .filter(({ fieldPermanent }: any) => fieldPermanent === true)
    .map(({ fieldName, _id }: any) => {
      return (
        <Card key={_id}>
          <CardContent>
          <Typography variant="h6" component="h3">{fieldName}</Typography>
          </CardContent>
        </Card>
      );
    });

  return (
    <Box my="2rem">
      <FormControlLabel
        control={
          <Checkbox
            name="defaultFieldNames"
            onChange={toggleSection}
             // toggle visibility of section -> default visible
            checked={
              sections.defaultFieldNames !== undefined ? sections.defaultFieldNames : true
            }
            icon={<KeyboardArrowRightIcon />}
            checkedIcon={<KeyboardArrowDownIcon />}
          />
        }
        label={
          <Typography variant="h4" component="h2">
            {languages.en.defaultClientFields}
          </Typography>
        }
      />
      {sections.defaultFieldNames || sections.defaultFieldNames === undefined ? (
        <Box
          display="flex"
          flexWrap="wrap"
          mt="1rem"
          mb="5rem"
          textAlign="center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridGap: "1rem"
          }}
        >
          {defaultFieldNames}
        </Box>
      ) : null}
    </Box>
  );
};

export default DefaultClientFieldsSection;
