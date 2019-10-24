import languages from "../../library/languages";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const ButtonsSingle = ({
  onDelete,
  toggleIsEmailCreated,
  isEmailCreated,
  onSave
}: any) => (
  <div>
    <Button
      color="primary"
      variant="contained"
      disabled={isEmailCreated}
      onClick={toggleIsEmailCreated}
    >
      {languages.en.email}
    </Button>
    <Button
      color="secondary"
      variant="contained"
      onClick={onDelete}
      startIcon={<DeleteIcon />}
    >
      {languages.en.delete}
    </Button>
    <Button color="primary" variant="contained" onClick={onSave}>
      {languages.en.save}
    </Button>
  </div>
);

export default ButtonsSingle;
