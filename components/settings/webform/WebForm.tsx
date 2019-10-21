import { useReducer, useEffect, useState } from "react";
import WebFormSelect from "./WebFormSelect";
import WebFormList from "./WebFormList";
import WebFormOptionSelect from "./WebFormOptionSelect";
import WebFormOptions from "./WebFormOptions";
import languages from "../../../library/languages";

//TODO: STRINGY DO LANGUAGES
//TODO: GENERATE A SAVE BUTTONS
//TODO: POST REQUEST NA BE

const WebForm = ({ fields }) => {
  const [counter, setCounter] = useState(0);
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

      case "addHiddenSelect":
        return state.map(field =>
          field.pause
            ? {
                ...field,
                fieldInForm: true,
                fieldFormVisible: false,
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
                fieldFormVisible: false,
                fieldOptions: field.fieldOptions.map(option =>
                  option.preselected
                    ? { ...option, preselected: false }
                    : option
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

  useEffect(() => {
    // console.log(webFields);
  }, [webFields]);

  return (
    <>
      <h3>{languages.en.selectField}:</h3>
      <WebFormSelect webFields={webFields} addNotSelect={addNotSelect} />
      <WebFormOptionSelect
        webFields={webFields}
        addVisibleSelect={addVisibleSelect}
        WebFormOptions={
          <WebFormOptions
            webFields={webFields}
            addHiddenSelect={addHiddenSelect}
          />
        }
      />
      <h3>{languages.en.selectedFields}:</h3>
      <WebFormList webFields={webFields} removeFromList={removeFromList} />
    </>
  );
};

export default WebForm;
