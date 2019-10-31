import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
import WebFormSelect from "./WebFormSelect";
import WebFormList from "./WebFormList";
import WebFormVisibleOrNot from "./WebFormVisibleOrNot";
import WebFormSubSelect from "./WebFormSubSelect";
import WebFormButtons from "./WebFormButtons";
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

const WebForm = ({state, dispatch }) => {
  const initCounterValue = state
    .map(e => e.order)
    .sort((a, b) => (b > a ? 1 : -1))[0];
  const classes = useStyles({});
  const user = useContext(UserContext);
  const [counter, setCounter] = useState(initCounterValue + 1);

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
    // save fields (form) on change
    saveFormAuto();
  }, [state]);

  return (
    <Box className={classes.formWrapper}>
      <form>
        <WebFormSelect
          state={state}
          counter={counter}
          setCounter={setCounter}
          dispatch={dispatch}
        />
        <WebFormVisibleOrNot
          state={state}
          dispatch={dispatch}
          counter={counter}
          setCounter={setCounter}
          />
        <WebFormSubSelect
          state={state}
          dispatch={dispatch}
          counter={counter}
          setCounter={setCounter}
        />
        <WebFormList state={state} dispatch={dispatch} />
        <WebFormButtons state={state} />
      </form>
    </Box>
  );
};

export default WebForm;
