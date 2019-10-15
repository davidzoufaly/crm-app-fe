import stringMethods from "../library/stringMethods";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";

const CustomFields = ({ fields, setupEditedField, deleteField }: any) => {
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

  const classes = useStyles({});

  const separatedCustomFields = fields
    .filter(({ fieldPermanent }: any) => !fieldPermanent)
    .map(({ fieldName, _id, fieldType, fieldOptions }: any) => {
      const customFieldNameFormated = new stringMethods(fieldName.toLowerCase())
        .firstCharUpperCase()
        .getString();

      const optionsMap = () => {
        return fieldOptions.map((e: any) => {
          return (
            <ListItem key={e.id}>
              <ListItemText primary={e.value.toLowerCase()} />
            </ListItem>
          );
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
              {fieldType === "select" ? (
                <List className={classes.list} dense={true}>
                  {optionsMap()}
                </List>
              ) : null}
              <button
                onClick={() =>
                  setupEditedField({
                    fieldName: customFieldNameFormated,
                    fieldType,
                    fieldPermanent: false,
                    fieldOptions
                  })
                }
              >
                Edit field
              </button>
              <button onClick={deleteField} id={_id}>
                Delete field
              </button>
            </CardContent>
          </Card>
        </Grid>
      );
    });

  return (
    <Grid container spacing={2}>
      {separatedCustomFields}
    </Grid>
  );
};

export default CustomFields;
