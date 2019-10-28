import languages from "../../../library/languages";
import { Typography, Box, ListItem, List, IconButton } from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const WebFormList = ({ webFields, removeFromList }) => {
  const list = [];
  webFields.map(
    ({
      _id,
      fieldName,
      fieldInForm,
      fieldFormVisible,
      fieldOptions,
      fieldType,
      order
    }) => {
      const strFormVisible = fieldFormVisible
        ? ` - ${languages.en.visibleInForm}`
        : null;

      const strFormNotVisible1 = !fieldFormVisible
        ? fieldType === "select"
          ? ` - ${languages.en.hiddenInForm}`
          : null
        : null;

      const strFormNotVisible2 = !fieldFormVisible
        ? fieldType === "select"
          ? fieldOptions.map(e => (e.preselected ? e.value : null)).join("")
          : null
        : null;

      const strFormNotVisible3 = !fieldFormVisible
        ? fieldType === "select"
          ? languages.en.asPreselected
          : null
        : null;

      languages.en.asPreselected;

      fieldInForm
        ? (list[order] = (
            <ListItem key={_id}>
              <Typography>
              <IconButton id={fieldName} onClick={removeFromList} color="secondary" style={{marginRight: "1rem"}}>
                <HighlightOffIcon/>
              </IconButton>
              <strong>{fieldName}</strong>
              {strFormVisible}
              {strFormNotVisible1} <strong>{strFormNotVisible2}</strong>{" "}
              {strFormNotVisible3}
              </Typography>
            </ListItem>
          ))
        : [];
    }
  );

  return (
    <Box mb="2rem">
      <Typography component="h3" variant="h5" gutterBottom>{languages.en.selectedFields}</Typography>
      {webFields.some(e => e.fieldInForm) ? <List dense>{list}</List> : <Typography>{languages.en.noFieldsSelected}</Typography>}
    </Box>
  );
};

export default WebFormList;
