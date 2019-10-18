import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ClientForm from "./clients/ClientForm";
import { useEffect, useReducer } from "react";
import axios from "axios";
import globalVars from "../library/globalVariables";
import generateUniqueId from "generate-unique-id";

const CreateClient = ({
  fields,
  isClientAdded,
  toggleIsClientAdded,
  addNewClientToState
}: any) => {
  const initialNewClintState = fields
    .map((e: any) => e.fieldName)
    .reduce((o, key) => Object.assign(o, { [key]: "" }), {});

  const [newClient, setNewClient] = useReducer((state, action) => {
    switch (action.type) {
      case "onTextChange":
        return {
          ...state,
          [action.payload.fieldName]:
            action.payload.fieldType === "number"
              ? parseInt(action.payload.value)
              : action.payload.value
        };
      case "addId" : 
        return {...state, _id : generateUniqueId({length: 24, useNumbers: true, useLetters: false, includeSymbols: ["a", "b", "c", "d", "e", "f"]})}
      
      case "clear":
        return initialNewClintState;

      default:
        return state;
    }
  }, initialNewClintState);

  const onChange = (fieldName, fieldType, event) => {
    setNewClient({type: "addId"})
    setNewClient({
      type: "onTextChange",
      payload: { fieldName, value: event.target.value, fieldType }
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const clientRes = await axios({
      method: "post",
      data: newClient,
      url: `${globalVars.serverURL}/clients`,
      responseType: "json"
    });
    const clientData = await clientRes.data;
    if (clientData.msg === "Success") {
      setNewClient({
        type: "clear"
      });
      toggleIsClientAdded();
      addNewClientToState(newClient);
    }
  };

  const onCancel = () => {
    setNewClient({
      type: "clear"
    });
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
