import { useReducer, useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
import WebFormSelect from "./WebFormSelect";
import WebFormList from "./WebFormList";
import WebFormVisibleOrNot from "./WebFormVisibleOrNot";
import WebFormSubSelect from "./WebFormSubSelect";
import WebFormButtons from "./WebFormButtons";
import WebFormReducer from "../../../reducers/webFormReducer";
import globalVars from "../../../library/globalVariables";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formWrapper: {
      marginTop: theme.spacing(3),
      borderRadius: theme.spacing(1),
      boxShadow: theme.shadows["1"],
      padding: theme.spacing(3),
      backgroundColor: theme.palette.grey["200"],
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

const WebForm = ({ fields }) => {
  const initCounterValue = fields
    .map(e => e.order)
    .sort((a, b) => (b > a ? 1 : -1))[0];
  const classes = useStyles({});
  const user = useContext(UserContext);

  const [state, dispatch] = useReducer(WebFormReducer, fields);
  const [counter, setCounter] = useState(initCounterValue);

  const addNotSelect = e => {
    state.map(field => {
      if (field.fieldName === e.target.value) {
        if (field.fieldType !== "select") {
          dispatch({
            type: "add",
            payload: { fieldName: e.target.value, counter }
          });
          setCounter(prevCount => prevCount + 1);
        } else {
          dispatch({
            type: "pauseSelect",
            payload: { fieldName: e.target.value }
          });
        }
      }
    });
  };

  const addVisibleSelect = e => {
    dispatch({
      type: "addVisibleSelect",
      payload: { fieldName: e.currentTarget.id, counter }
    });
    setCounter(prevCount => prevCount + 1);
  };

  const addHiddenSelect = e => {
    dispatch({
      type: "addHiddenSelect",
      payload: { optionValue: e.target.value, counter }
    });
    setCounter(prevCount => prevCount + 1);
  };

  const removeFromList = e => {
    dispatch({
      type: "remove",
      payload: { fieldName: e.currentTarget.id }
    });
  };

  const showOptionsOnClick = () => {
    dispatch({
      type: "addNotVisibleValue"
    });
  };

  const saveFormAuto = async () => {
    await axios({
      method: "PUT",
      url: `${globalVars.serverURL}/fields`,
      params: { key: user.user.userkey },
      data: state,
      responseType: "json"
    });
  };

  useEffect(() => {
    //save fields (form) on change
    state !== fields ? saveFormAuto() : null;
  }, [state]);

  return (
    <Box className={classes.formWrapper}>
      <form>
        <WebFormSelect webFields={state} addNotSelect={addNotSelect} />
        <WebFormVisibleOrNot
          webFields={state}
          addVisibleSelect={addVisibleSelect}
          showOptionsOnClick={showOptionsOnClick}
        />
        <WebFormSubSelect
          webFields={state}
          addHiddenSelect={addHiddenSelect}
        />
        <WebFormList webFields={state} removeFromList={removeFromList} />
        <WebFormButtons state={state} />
      </form>
    </Box>
  );
};

export default WebForm;
