import { useReducer, useEffect, useState, useContext } from "react";
import moment from "moment";
import axios from "axios";
import generateUniqueId from "generate-unique-id";
import UserContext from "../UserContext";
import ClientForm from "./ClientForm";
import globalVars from "../../library/globalVariables";
import languages from "../../library/languages";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      padding: theme.spacing(3),
      backgroundColor: theme.palette.grey["200"],
      boxShadow: theme.shadows["1"],
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      }
    },
    textField: {
      marginTop: theme.spacing(2)
    }
  })
);

const CreateClient = ({
  fields,
  isClientAdded,
  toggleIsClientAdded,
  addNewClientToState
}: any) => {
  const classes = useStyles({});
  const initialNewClientState = fields
    .map((e: any) => e.fieldName)
    .reduce((o, key) => Object.assign(o, { [key]: "" }), {});

  const user = useContext(UserContext);
  const [submitting, setSubmitting] = useState(false);
  const [newClient, setNewClient] = useReducer((state, action) => {
    switch (action.type) {
      case "onChange":
        return {
          ...state,
          [action.payload.fieldName as string]:
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
        };
      case "clear":
        return {
          initialNewClientState
        };

      default:
        return state;
    }
  }, initialNewClientState);

  const onChange = event => {
    setNewClient({
      type: "onChange",
      payload: {
        fieldName: event.target.name,
        value: event.target.value,
        fieldType: event.target.type
      }
    });
  };

  useEffect(() => {
    //trigger side effect when submitting state is changed and its is true
    submitting ? submitNewClient() : null;
  }, [submitting]);

  const onSubmit = e => {
    // on Button Click prepare client object to be ready to send
    e.preventDefault();
    setNewClient({ type: "addDate" });
    setNewClient({ type: "addId" });
    // change submitting state to trigger effect with POST req.
    setSubmitting(true);
  };

  const submitNewClient = async () => {
    //post req to DB
    const clientRes = await axios({
      method: "POST",
      data: newClient,
      url: `${globalVars.serverURL}/clients`,
      params: { key: user.user.userkey },
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
  };

  const onCancel = () => {
    setNewClient({
      type: "clear"
    });
    toggleIsClientAdded();
  };

  return isClientAdded ? (
    <Box className={classes.formWrapper}>
      <Typography variant="h4" component="h2" gutterBottom>
        {languages.en.addNewClient}
      </Typography>
      <form onSubmit={onSubmit}>
        <ClientForm fields={fields} onChange={onChange} newClient={newClient} />
        <Box display="flex" justifyContent="flex-end" mt="2rem">
          <Button
            variant="contained"
            color="secondary"
            style={{ marginRight: "1rem" }}
            onClick={onCancel}
          >
            {languages.en.cancel}
          </Button>
          <Button variant="contained" color="primary" type="submit">
            {languages.en.save}
          </Button>
        </Box>
      </form>
    </Box>
  ) : null;
};

export default CreateClient;
