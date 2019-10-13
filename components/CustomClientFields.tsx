import stringMethods from "../library/stringMethods";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const CustomClientFields = ({ fields }: any) => {
  const classes = useStyles();
  const customFields = fields
    .filter(({ fieldPermanent }: any) => !fieldPermanent)
    .map(({ fieldName, _id, fieldType, fieldOptions }: any) => {
      const customFieldNameFormated = new stringMethods(fieldName)
        .camelStringToText()
        .firstCharUpperCase()
        .getString();

      const customFieldTypeFormated = new stringMethods(fieldType)
        .camelStringToText()
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
        <Card className={classes.card} key={_id}>
          <CardContent>
          <Typography variant="h5" component="h3">
            {customFieldNameFormated}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            ({customFieldTypeFormated.toLowerCase()})
          </Typography>
            {fieldType === "select" ? <List>{optionsMap()}</List> : null}
          </CardContent>
        </Card>
      );
    });

  return (
    <div>
      <h2>Custom Client Fields</h2>
      <div>{customFields}</div>
    </div>
  );
};

export default CustomClientFields;
