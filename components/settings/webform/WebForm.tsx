import { useReducer, useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../../UserContext";
import WebFormSelect from "./WebFormSelect";
import WebFormList from "./WebFormList";
import WebFormVisibleOrNot from "./WebFormVisibleOrNot";
import WebFormFieldOptions from "./WebFormFieldOptions";
import WebFormSubSelect from "./WebFormSubSelect";
import WebFormButtons from "./WebFormButtons";
import globalVars from "../../../library/globalVariables"

const WebForm = ({ fields }) => {

  const initCounterValue = fields.map(e => e.order).sort((a,b) => b > a ? 1 : -1)[0];

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
      payload: { fieldName: e.target.id }
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
      payload: { fieldName: e.target.id }
    });
  };

  const showOptionsOnClick = () => {
    setWebFields({
      type: "addNotVisibleValue"
    });
  };

  useEffect(() => {
    //save fields (form) on change
    const saveFormAuto = async () => {
      await axios({
            method: "PUT",
            url: `${globalVars.serverURL}/fields`,
            params: {key: user.user.userkey},
            data: webFields,
            responseType: "json"
        })
    }
    saveFormAuto();
}, [webFields])


  return (
    <>
      <h2>Web form</h2>
      <WebFormSelect webFields={webFields} addNotSelect={addNotSelect} />
      <WebFormVisibleOrNot
        webFields={webFields}
        addVisibleSelect={addVisibleSelect}
        showOptionsOnClick={showOptionsOnClick}
      />
      <WebFormSubSelect
        webFields={webFields}
        addHiddenSelect={addHiddenSelect}
        webFormOptions={
          <WebFormFieldOptions
            webFields={webFields}
          />
        }
      />
      <WebFormList webFields={webFields} removeFromList={removeFromList} />
      <WebFormButtons webFields={webFields}/>
    </>
  );
};

export default WebForm;
