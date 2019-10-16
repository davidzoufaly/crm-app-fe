import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ClientForm from "./ClientForm";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import globalVars from "../library/globalVariables";

const CreateClient = ({
  fields,
  isClientAdded,
  toggleIsClientAdded,
  refreshList
}: any) => {
  const initialNewClintState = fields
    .map((e: any) => e.fieldName)
    .reduce((o, key) => Object.assign(o, { [key]: "" }), {});

  const [newClient, setNewClient] = useState(initialNewClintState);

  const onChange = (fieldName, fieldType, event) => {
    fieldType === "number"
      ? setNewClient({
          ...newClient,
          [fieldName]: parseInt(event.target.value)
        })
      : setNewClient({ ...newClient, [fieldName]: event.target.value });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    const clientRes = await axios({
      method: "post",
      data: newClient,
      url: `${globalVars.serverURL}/clients`,
      responseType: "json"
    });
    const clientData = await clientRes.data;
    if (clientData.msg === "Success") {
      setNewClient(initialNewClintState);
      toggleIsClientAdded();
      refreshList();
    }
  };

  const onCancel = () => {
    setNewClient(initialNewClintState);
    toggleIsClientAdded();
  };

  useEffect(() => {
    // console.log(newClient);
  });

  return isClientAdded ? (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Add new client
      </Typography>
      <form onSubmit={onSubmit}>
      <ClientForm fields={fields} onChange={onChange} newClient={newClient} />
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>
        Cancel
      </Button>
      </form>
    </div>
  ) : null;
};

export default CreateClient;
