import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ClientForm from "./ClientForm";
import { useReducer, useEffect, useState } from "react";
import axios from "axios";
import globalVars from "../../library/globalVariables";
import languages from "../../library/languages";
import generateUniqueId from "generate-unique-id";
import moment from "moment";

const CreateClient = ({
  fields,
  isClientAdded,
  toggleIsClientAdded,
  addNewClientToState,
}: any) => {
  const initialNewClientState = fields
    .map((e: any) => e.fieldName)
    .reduce((o, key) => Object.assign(o, { [key]: "" }), {});

  const [submitting, setSubmitting] = useState(false);
  const [newClient, setNewClient] = useReducer((state, action) => {
    switch (action.type) {
      case "onTextChange":
        return {
          ...state,
          [action.payload.fieldName]:
            action.payload.fieldType === globalVars.fieldTypes.number
              ? parseInt(action.payload.value)
              : action.payload.value
        };
      case "addId":
        return {
          ...state,
          _id: generateUniqueId({
            length: 24,
            useNumbers: true,
            useLetters: false,
            includeSymbols: ["a", "b", "c", "d", "e", "f"]
          })
        };
      case "addDate":
        return {
          ...state,
           ["Date added"]: moment().format("llll")
        }
      case "clear":
        return {
          initialNewClientState  
        };

      default:
        return state;
    }
  }, initialNewClientState);

  const onChange = (fieldType, event) => {
    setNewClient({
      type: "onTextChange",
      payload: { fieldName : event.target.name, value: event.target.value, fieldType }
    });

  };

  useEffect(() => {
    //trigger side effect when submitting state is changed and its is true
    submitting ? submitNewClient() : null;
  }, [submitting])

  const onSubmit = e => {
      // on Button Click prepare client object to be ready to send
      e.preventDefault();
      setNewClient({type: "addDate"});
      setNewClient({ type: "addId" });
      // change submitting state to trigger effect with POST req.
      setSubmitting(true);
  };

  const submitNewClient = async () => {
    //post req to DB
    const clientRes = await axios({
      method: "post",
      data: newClient,
      url: `${globalVars.serverURL}/clients`,
      responseType: "json"
    });
    const clientData = await clientRes.data;
    if (clientData.msg === globalVars.msgSuccess) {
      // add client data to clients state for table update
      addNewClientToState(newClient);
      // reset newClient state
      setNewClient({
        type: "clear"
      });
      // hide form
      toggleIsClientAdded();
      //reset submitting
      setSubmitting(false);
    } else {
      alert(languages.en.somethingWentWrong);
    }
  }

  const onCancel = () => {
    setNewClient({
      type: "clear"
    });
    toggleIsClientAdded();
  };

  return isClientAdded ? (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        {languages.en.addNewClient}
      </Typography>
      <form onSubmit={onSubmit}>
        <ClientForm fields={fields} onChange={onChange} newClient={newClient} />
        <Button variant="contained" color="primary" type="submit">
          {languages.en.save}
        </Button>
        <Button variant="contained" color="secondary" onClick={onCancel}>
          {languages.en.cancel}
        </Button>
      </form>
    </div>
  ) : null;
};

export default CreateClient;
