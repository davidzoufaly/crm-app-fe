import languages from "../../library/languages";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid, Box} from "@material-ui/core";

const ButtonsSingle = ({
  onDelete,
  toggleIsEmailCreated,
  isEmailCreated,
  onSave
}: any) => (
  <Box mt="1rem">
  <Grid container spacing={2}>
    <Grid item>
      <Button
        color="primary"
        variant="contained"
        disabled={isEmailCreated}
        onClick={toggleIsEmailCreated}
      >
        {languages.en.email}
      </Button>
    </Grid>
    <Grid item>
      <Button
        color="secondary"
        variant="contained"
        onClick={onDelete}
        startIcon={<DeleteIcon />}
      >
        {languages.en.delete}
      </Button>
    </Grid>
    <Grid item>
      <Button color="primary" variant="contained" onClick={onSave}>
        {languages.en.save}
      </Button>
    </Grid>
  </Grid>
  </Box>
);

export default ButtonsSingle;
