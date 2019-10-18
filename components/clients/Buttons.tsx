import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EmailIcon from '@material-ui/icons/Email';
import { useEffect } from "react";

const Buttons = ({
  disabled,
  toggleIsClientAdded,
  deleteMultipleClients,
  isClientAdded,
  isEmailCreated,
  toggleIsEmailCreated,
}: any) => {
  useEffect(() => {
    console.log(isEmailCreated);
  })
  
  return(
  <div>
    <Button
      variant="contained"
      color="primary"
      disabled={isClientAdded}
      onClick={toggleIsClientAdded}
      startIcon={<AddIcon />}
    >
      Add new
    </Button>
    <Button
      variant="contained"
      color="secondary"
      disabled={disabled}
      onClick={deleteMultipleClients}
      startIcon={<DeleteIcon />}
    >
      Delete
    </Button>
    <Button variant="contained"
    color="primary"
    onClick={toggleIsEmailCreated}
    disabled={disabled || isEmailCreated}
    startIcon={<EmailIcon/>}
    >Email
    </Button>
  </div>
)};

export default Buttons;
