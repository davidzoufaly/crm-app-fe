import { useReducer, useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
import WebFormSelect from "./WebFormSelect";
import WebFormList from "./WebFormList";
import WebFormVisibleOrNot from "./WebFormVisibleOrNot";
import WebFormSubSelect from "./WebFormSubSelect";
import WebFormButtons from "./WebFormButtons";
import globalVars from "../../../library/globalVariables"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import languages from "../../../library/languages";

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
  
  const initCounterValue = fields.map(e => e.order).sort((a,b) => b > a ? 1 : -1)[0];
  const classes = useStyles({});
  const user = useContext(UserContext);

  const [counter, setCounter] = useState(initCounterValue);
  const [webFields, setWebFields] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return state.map(field =>
          field.fieldName === action.payload.fieldName
            ? { ...field, fieldInForm: true, order: counter }
            : field
        );

      case "addVisibleSelect":
        return state.map(field =>
          field.fieldName === action.payload.fieldName
            ? {
                ...field,
                fieldInForm: true,
                fieldFormVisible: true,
                pause: false,
                order: counter
              }
            : field
        );

      case "addNotVisibleValue":
        return state.map(field =>
          field.pause
            ? {
                ...field,
                fieldFormVisible: false
              }
            : field
        );

      case "addHiddenSelect":
        return state.map(field =>
          field.pause
            ? {
                ...field,
                fieldInForm: true,
                pause: false,
                order: counter,
                fieldOptions: field.fieldOptions.map(option =>
                  option.value === action.payload.optionValue
                    ? { ...option, preselected: true }
                    : option
                )
              }
            : field
        );

      case "pauseSelect":
        return state.map(field =>
          field.fieldName === action.payload.fieldName
            ? { ...field, pause: true }
            : field
        );

      case "remove":
        return state.map(field =>
          field.fieldName === action.payload.fieldName
            ? {
                ...field,
                fieldInForm: false,
                fieldFormVisible: null,
                fieldOptions: field.fieldOptions.map(option =>
                  option.preselected ? { ...option, preselected: null } : option
                )
              }
            : field
        );
      default:
        return state;
    }
  }, fields);


  const addNotSelect = e => {
    webFields.map(field => {
      if (field.fieldName === e.target.value) {
        if (field.fieldType !== "select") {
          setWebFields({
            type: "add",
            payload: { fieldName: e.target.value }
          });
          setCounter(prevCount => prevCount + 1);
        } else {
          setWebFields({
            type: "pauseSelect",
            payload: { fieldName: e.target.value }
          });
        }
      }
    });
  };

  const addVisibleSelect = e => {
    setWebFields({
      type: "addVisibleSelect",
      payload: { fieldName: e.currentTarget.id }
    });
    setCounter(prevCount => prevCount + 1);
  };

  const addHiddenSelect = e => {
    setWebFields({
      type: "addHiddenSelect",
      payload: { optionValue: e.target.value }
    });
    setCounter(prevCount => prevCount + 1);
  };

  const removeFromList = e => {
    setWebFields({
      type: "remove",
      payload: { fieldName: e.currentTarget.id }
    });
  };

  const showOptionsOnClick = () => {
    setWebFields({
      type: "addNotVisibleValue"
    });
  };

  const saveFormAuto = async () => {
    await axios({
          method: "PUT",
          url: `${globalVars.serverURL}/fields`,
          params: {key: user.user.userkey},
          data: webFields,
          responseType: "json"
      })
  }

  useEffect(() => {
    //save fields (form) on change
    webFields !== fields
    ? saveFormAuto()
    : null
}, [webFields])


  return (
    <Box className={classes.formWrapper}>
    <form>
      <WebFormSelect webFields={webFields} addNotSelect={addNotSelect} />
      <WebFormVisibleOrNot
        webFields={webFields}
        addVisibleSelect={addVisibleSelect}
        showOptionsOnClick={showOptionsOnClick}
      />
      <WebFormSubSelect
        webFields={webFields}
        addHiddenSelect={addHiddenSelect}
      />
      <WebFormList webFields={webFields} removeFromList={removeFromList} />
      <WebFormButtons webFields={webFields}/>
    </form>
    </Box>
  );
};

export default WebForm;
