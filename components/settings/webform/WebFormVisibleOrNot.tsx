import languages from "../../../library/languages";
import { Typography, Box, Button } from "@material-ui/core";

const WebFormVisibleOrNot = ({ webFields, addVisibleSelect, showOptionsOnClick } : any) => {

  const VisibleOrNot = webFields.map(({fieldName, fieldFormVisible, _id, pause}) =>
    fieldFormVisible === null ? (
      pause ? (
        <Box key={_id} mb="2rem">
          <Typography gutterBottom component="h4" variant="h6">
            {languages.en.shouldBe} <strong>{fieldName}</strong> {languages.en.visibleInForm}?
          </Typography>
          <Button id={fieldName} variant="contained" color="primary" style={{marginRight: "1rem"}} onClick={addVisibleSelect}>
            {languages.en.yes}
          </Button>
          <Button variant="contained" color="secondary" onClick={showOptionsOnClick}>{languages.en.no}</Button>
        </Box>
      ) : null
    ) : null
  );

  return (
    <>
    {VisibleOrNot}
    </>
  );
};

export default WebFormVisibleOrNot;
