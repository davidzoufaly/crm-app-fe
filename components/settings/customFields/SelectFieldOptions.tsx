import languages from "../../../library/languages";
import { Fab, Input, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addOption: {
      margin: theme.spacing(3),
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.white
    },
    inputWrapper: {
      marginBottom: theme.spacing(1),
    }
  })
);

const SelectFieldOptions = ({ options, fieldMethods }: any) => {
  const classes = useStyles({});

  const items = options.map((e: any) => (
    <div key={e.id} className={classes.inputWrapper}>
      <Input
        type="text"
        id={e.id}
        placeholder={languages.en.option}
        onChange={() => fieldMethods.onOptionChange(e.id, event)}
        value={e.value}
      />
      <IconButton
        color="secondary"
        size="small"
        id={e.id}
        onClick={fieldMethods.onOptionDelete}
        aria-label={languages.en.deleteOption}
      >
        <HighlightOffIcon />
      </IconButton>
    </div>
  ));
  return (
    <div>
      {items}
      <Fab
        onClick={fieldMethods.handleOptionSpawn}
        size="medium"
        variant="extended"
        className={classes.addOption}
      >
        <AddIcon />
        {languages.en.option}
      </Fab>
    </div>
  );
};
export default SelectFieldOptions;
