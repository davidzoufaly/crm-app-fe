import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EmailIcon from "@material-ui/icons/Email";
import languages from "../../library/languages";
import { Box } from "@material-ui/core";

const Buttons = ({
  clientsAreNotChecked,
  toggleIsClientAdded,
  deleteMultipleClients,
  isClientAdded,
  isEmailCreated,
  toggleIsEmailCreated
}: any) => (
  <Box
    my="1rem"
    display="flex"
    width="370px"
    maxWidth="1"
    justifyContent="space-between"
  >
    <Button
      variant="contained"
      color="primary"
      disabled={isClientAdded || isEmailCreated}
      onClick={toggleIsClientAdded}
      startIcon={<AddIcon />}
    >
      {languages.en.addNew}
    </Button>
    <Button
      variant="contained"
      color="primary"
      onClick={toggleIsEmailCreated}
      disabled={clientsAreNotChecked || isEmailCreated || isClientAdded}
      startIcon={<EmailIcon />}
    >
      {languages.en.email}
    </Button>
    <Button
      variant="contained"
      color="secondary"
      disabled={clientsAreNotChecked}
      onClick={deleteMultipleClients}
      startIcon={<DeleteIcon />}
    >
      {languages.en.delete}
    </Button>
  </Box>
);

export default Buttons;
