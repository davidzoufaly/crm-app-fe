import languages from "../../../library/languages";
import stringMethods from "../../../library/stringMethods";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import {
  Fab,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Box
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      marginTop: theme.spacing(3),
      color: theme.palette.common.white
    },
    extendedIcon: {
      marginRight: theme.spacing(2)
    },
    formWrapper: {
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows["1"],
      padding: theme.spacing(3),
      backgroundColor: theme.palette.grey["200"],
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      }
    },
    textField: {
      marginTop: theme.spacing(2)
    }
  })
);

const AddOrEditField = ({
  editedField,
  displayComponent,
  fieldMethods,
  handleOption
}: any) => {
  const classes = useStyles({});
  return displayComponent ? (
    <Box className={classes.formWrapper}>
      <Typography component="h3" variant="h5">
        {editedField.id
          ? languages.en.editCustomField
          : languages.en.newCustomField}
      </Typography>
      <form onSubmit={fieldMethods.saveEditedField}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TextField
              id={new stringMethods(languages.en.fieldName)
                .textToHtmlProp()
                .getString()}
              autoFocus={true}
              type="text"
              label={languages.en.fieldName}
              className={classes.textField}
              value={editedField.fieldName}
              onChange={fieldMethods.onNameChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl className={classes.textField} fullWidth>
              <InputLabel
                htmlFor={new stringMethods(languages.en.fieldType)
                  .textToHtmlProp()
                  .getString()}
              >
                {languages.en.fieldType}
              </InputLabel>
              <Select
                id={new stringMethods(languages.en.fieldType)
                  .textToHtmlProp()
                  .getString()}
                onChange={fieldMethods.onSelectChange}
                value={editedField.fieldType}
              >
                <MenuItem value="text">{languages.en.text}</MenuItem>
                <MenuItem value="select">{languages.en.select}</MenuItem>
                <MenuItem value="number">{languages.en.number}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {editedField.fieldType === "select" ? (
            <Grid item xs={6}>
              {handleOption}
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end">
            <Button
              onClick={fieldMethods.toggleDisplayComponent}
              color="secondary"
              variant="contained"
              style={{ marginRight: "1rem" }}
            >
              {languages.en.cancel}
            </Button>
            <Button type="submit" variant="contained" color="primary">
              {languages.en.save}
            </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  ) : (
    <div>
      <Fab
        color="primary"
        variant="extended"
        aria-label="add"
        className={classes.fab}
        onClick={fieldMethods.toggleDisplayComponent}
      >
        <AddIcon />
        {languages.en.field}
      </Fab>
    </div>
  );
};

export default AddOrEditField;
