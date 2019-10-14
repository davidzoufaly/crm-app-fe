import stringMethods from "../library/stringMethods";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import AddOrEditField from "../components/AddOrEditField";

const useStyles = makeStyles({
  card: {
    textAlign: "center",
    height: "100%",
    minWidth: "300px"
  },
  list: {
      listStyleType: "disc"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const CustomClientFields = ({ fields, deleteField }: any) => {
  const [displayComponent, setDisplayComponent] = useState(false);
  const [editedField] = useState({
    fieldName: "",
    fieldType: "text",
    fieldPermanent: false,
    fieldOptions: []
  })

  const classes = useStyles({});

  const changeDisplayComponent = () => {
    displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
    //TODO: POSÍLAT PO KLIKU NA EDIT FIELD -> OBJEKT S PARAMETRY POLE
  }

  const customFields = fields
    .filter(({ fieldPermanent }: any) => !fieldPermanent)
    .map(({ fieldName, _id, fieldType, fieldOptions }: any) => {
      const customFieldNameFormated = new stringMethods(fieldName.toLowerCase())
        .firstCharUpperCase()
        .getString();

      const optionsMap = () => {
        return fieldOptions.map((e: string) => {
          const optionFormatedKey = new stringMethods(e)
            .textToCamelString()
            .replaceStringDiacritics()
            .getString();

          return <ListItem key={optionFormatedKey}><ListItemText primary={e.toLowerCase()} /></ListItem>
        });
      };

      return (
        <Grid item key={_id}>
            <Card className={classes.card}>
            <CardContent>
            <Typography variant="h5" component="h3">
                {customFieldNameFormated}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                ({fieldType.toLowerCase()})
            </Typography>
                {fieldType === "select" ? <List className={classes.list} dense={true}>{optionsMap()}</List> : null}
            <button onClick={changeDisplayComponent}>Edit field</button>
            <button onClick={deleteField} id={_id}>Delete field</button>
            </CardContent>
            </Card>
        </Grid>  
      );
    });

  return (
    <div>
      <h2>Custom Client Fields</h2>
      <Grid container spacing={2}>
      {customFields}
      </Grid>
      {!displayComponent ? <button onClick={changeDisplayComponent}>Add new field</button> : <AddOrEditField fieldObject={editedField} changeDisplayComponent={changeDisplayComponent} />}
    </div>
  );
};

export default CustomClientFields;
