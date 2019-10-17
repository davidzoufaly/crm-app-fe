import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const ButtonsSingle = () => (
   <div>
       <Button color="primary" variant="contained">Send E-mail</Button>
       <Button color="secondary" variant="contained" startIcon={<DeleteIcon/>}>Delete</Button>
       <Button color="primary" variant="contained" type="submit">Save</Button>
   </div>

)

export default ButtonsSingle;