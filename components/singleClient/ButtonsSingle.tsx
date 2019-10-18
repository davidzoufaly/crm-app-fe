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
      email
    </Button>
    <Button
      color="secondary"
      variant="contained"
      onClick={onDelete}
      startIcon={<DeleteIcon />}
    >
      Delete
    </Button>
    <Button color="primary" variant="contained" onClick={onSave}>
      Save
    </Button>
  </div>
);

export default ButtonsSingle;
