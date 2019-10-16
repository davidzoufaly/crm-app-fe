import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ClientForm from "./ClientForm";
import { useEffect, useState } from "react";
import axios from "axios";
import globalVars from "../library/globalVariables";

const CreateClient = ({ fields, isClientAdded, toggleIsClientAdded, refreshList }: any) => {
  const initialNewClintState = fields
    .map((e: any) => e.fieldName)
    .reduce((o, key) => Object.assign(o, { [key]: "" }), {});

  const [newClient, setNewClient] = useState(initialNewClintState);

  const onChange = (fieldName, event) => {
    setNewClient({ ...newClient, [fieldName]: event.target.value });
  };

  const onSubmit = async () => {
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
    console.log(newClient);
  });

  return isClientAdded ? (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Add new client
      </Typography>
      <ClientForm fields={fields} onChange={onChange} newClient={newClient} />
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Save
      </Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  ) : null;
};

export default CreateClient;
