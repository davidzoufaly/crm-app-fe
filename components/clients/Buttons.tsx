import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EmailIcon from '@material-ui/icons/Email';

const Buttons = ({
  clientsAreNotChecked,
  toggleIsClientAdded,
  deleteMultipleClients,
  isClientAdded,
  isEmailCreated,
  toggleIsEmailCreated,
}: any) => (
  <div>
    <Button
      variant="contained"
      color="primary"
      disabled={isClientAdded || isEmailCreated}
      onClick={toggleIsClientAdded}
      startIcon={<AddIcon />}
    >
      Add new
    </Button>
    <Button
      variant="contained"
      color="secondary"
      disabled={clientsAreNotChecked}
      onClick={deleteMultipleClients}
      startIcon={<DeleteIcon />}
    >
      Delete
    </Button>
    <Button variant="contained"
    color="primary"
    onClick={toggleIsEmailCreated}
    disabled={clientsAreNotChecked || isEmailCreated || isClientAdded}
    startIcon={<EmailIcon/>}
    >Email
    </Button>
  </div>
);

export default Buttons;
