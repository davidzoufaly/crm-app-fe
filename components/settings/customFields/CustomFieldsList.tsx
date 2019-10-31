import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fab } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      textAlign: "center",
      minWidth: "280px",
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    list: {
      padding: 0,
      lineHeight: "14px",
      margin: "auto",
      marginBottom: theme.spacing(1)
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    cardWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%"
    },
    listItemIcon: {
      minWidth: 0,
      paddingRight: theme.spacing(1),
      color: "black"
    }
  })
);

const CustomFields = ({ setupEditedField, deleteFieldRes, state}: any) => {
  const classes = useStyles({});

  const separatedCustomFields = state
    .filter(({ fieldPermanent }: any) => !fieldPermanent)
    .map(({ fieldName, _id, fieldType, fieldOptions, fieldInForm, fieldFormVisible, order }: any) => {
      const options = fieldOptions.map((e: any) => {
        return (
          <ListItem key={e.id}>
            <ListItemText primary={e.value} />
          </ListItem>
        );
      });

      return (
        <Grid item key={_id} className={classes.card}>
          <Card style={{ height: "100%" }}>
            <CardContent className={classes.cardWrapper}>
              <Box>
                <Typography variant="h6" component="h3">
                  {fieldName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  ({fieldType.toLowerCase()})
                </Typography>
                {fieldType === "select" && fieldOptions.length > 0 ? (
                  <Box>
                    <List className={classes.list} dense>
                      {options}
                    </List>
                  </Box>
                ) : null}
              </Box>
              <Box>
                <Box width="40%" mt="1rem">
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Fab
                        size="small"
                        color="primary"
                        onClick={() =>
                          setupEditedField({
                            fieldName,
                            fieldType,
                            fieldPermanent: false,
                            fieldInForm,
                            fieldFormVisible,
                            fieldOptions,
                            order,
                            _id: _id
                          })
                        }
                      >
                        <EditIcon />
                      </Fab>
                    </Grid>
                    <Grid item xs={6}>
                      <Fab
                        size="small"
                        color="secondary"
                        onClick={() => deleteFieldRes(_id)}
                      >
                        <DeleteIcon />
                      </Fab>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
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
