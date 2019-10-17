import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from '@material-ui/icons/Add'

const Buttons = ({disabled, toggleIsClientAdded, deleteMultipleClients, isClientAdded} : any) => (
    <div>
    <Button variant="contained" color="primary" disabled={isClientAdded} onClick={toggleIsClientAdded} startIcon={<AddIcon />}>
      Add new
      </Button>
      <Button variant="contained" color="secondary" disabled={disabled}  onClick={deleteMultipleClients} startIcon={<DeleteIcon />}>
      Delete
      </Button>
    </div>
)

export default Buttons