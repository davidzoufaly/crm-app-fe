import stringMethods from "../library/stringMethods";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

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

      const options = fieldOptions.map((e: any) => {
        return (
          <ListItem key={e.id}>
            <ListItemText primary={e.value} />
          </ListItem>
        );
      });

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
              {fieldType === "select" && fieldOptions.length > 0 ? (
                <List className={classes.list} dense={true}>
                  {options}
                </List>
              ) : null}
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  setupEditedField({
                    fieldName: customFieldNameFormated,
                    fieldType,
                    fieldPermanent: false,
                    fieldOptions,
                    id: _id
                  })
                }
                startIcon={<EditIcon />}
                size="small"
              >
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={() => deleteField(_id)}
                startIcon={<DeleteIcon />}
                size="small"
              >
                Delete
              </Button>
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
