import { addVisibleSelect, showOptionsOnClick } from "../../../actions/fieldsAction";
import languages from "../../../library/languages";
import { Typography, Box, Button } from "@material-ui/core";

const WebFormVisibleOrNot = ({ state, dispatch, counter, setCounter } : any) => {

  const VisibleOrNot = state.map(({fieldName, fieldFormVisible, _id, pause}) =>
    fieldFormVisible === null ? (
      pause ? (
        <Box key={_id} mb="2rem">
          <Typography gutterBottom component="h4" variant="h6">
            {languages.en.shouldBe} <strong>{fieldName}</strong> {languages.en.visibleInForm}?
          </Typography>
          <Button id={fieldName} variant="contained" color="primary" style={{marginRight: "1rem"}} onClick={() => addVisibleSelect(dispatch, setCounter, counter)}>
            {languages.en.yes}
          </Button>
          <Button variant="contained" color="secondary" onClick={() => showOptionsOnClick(dispatch)}>{languages.en.no}</Button>
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
