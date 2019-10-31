import { useState, useReducer, useContext } from "react";
import axios from "axios";
import uniqid from "uniqid";
import generateUniqueId from "generate-unique-id";
import AddOrEditField from "./AddOrEditField";
import UserContext from "../../UserContext";
import CustomFieldsList from "./CustomFieldsList";
import SelectFieldOptions from "./SelectFieldOptions";
import globalVars from "../../../library/globalVariables";
import { Box } from "@material-ui/core";
import { addField, deleteField } from "../../../actions/fieldsAction";

const CustomFields = ({ state, dispatch }: any) => {
  const blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldOptions: [],
    fieldFormVisible: null,
    _id: generateUniqueId({
      length: 24,
      useNumbers: true,
      useLetters: false,
      includeSymbols: ["a", "b", "c", "d", "e", "f"]
    })
  };

  const user = useContext(UserContext);
  const [displayComponent, setDisplayComponent] = useState(false);

  const [editedField, setEditedField] = useReducer((state, action) => {
    switch (action.type) {
      case "fieldNameChange":
        return {
          ...state,
          fieldName: action.payload.value
        };
      case "selectValueChange":
        return {
          ...state,
          fieldType: action.payload.value
        };
      case "newOptionSpawn":
        return {
          ...state,
          fieldOptions: [...state.fieldOptions, { id: uniqid(), value: "" }]
        };
      case "clear":
        return blankFieldObject;
      case "optionValueChange":
        return {
          ...state,
          fieldOptions: state.fieldOptions.map((el: any) =>
            el.id === action.payload.id
              ? { ...el, value: action.payload.value }
              : el
          )
        };
      case "optionDelete":
        // if option with preselected in form being delete, remove field from form
        return state.fieldInForm &&
          state.fieldOptions.some(
            el => el.id === action.payload.id && el.preselected
          )
          ? {
              ...state,
              fieldInForm: false,
              fieldOptions: state.fieldOptions.filter(
                e => e.id !== action.payload.id
              )
            }
          : {
              ...state,
              fieldOptions: state.fieldOptions.filter(
                e => e.id !== action.payload.id
              )
            };
      case "setWithPaylod":
        return action.payload.obj;

      default:
        return state;
    }
  }, blankFieldObject);

  const fieldMethods = {
    onNameChange(event: any) {
      setEditedField({
        type: "fieldNameChange",
        payload: { value: event.target.value }
      });
    },
    onSelectChange(event: any) {
      setEditedField({
        type: "selectValueChange",
        payload: { value: event.target.value }
      });
    },
    handleOptionSpawn(e) {
      e.preventDefault();
      setEditedField({
        type: "newOptionSpawn"
      });
    },
    toggleDisplayComponent() {
      displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
      setEditedField({ type: "clear" });
    },
    onOptionDelete(event: any) {
      setEditedField({
        type: "optionDelete",
        payload: { id: event.currentTarget.id }
      });
    },
    onOptionChange(id, event) {
      setEditedField({
        type: "optionValueChange",
        payload: { value: event.target.value, id }
      });
    },
    setupEditedField(obj: any) {
      setEditedField({
        type: "setWithPaylod",
        payload: { obj }
      });
      !displayComponent ? setDisplayComponent(true) : null;
    },
    saveEditedField(e) {
      e.preventDefault();

      const fieldIsUpdated = async () => {
        const { fieldName, fieldType, fieldOptions, _id } = editedField;
        const res = await axios({
          method: "PUT",
          url: `${globalVars.serverURL}/fields/${_id}`,
          params: { key: user.user.userkey },
          data: { fieldName, fieldType, fieldOptions },
          responseType: "json"
        });
        const data = await res.data;
        if (data.msg === globalVars.msgSuccess) {
          reset();
        }
      };

      const fieldIsCreated = async () => {
        const res = await axios({
          method: "POST",
          params: { key: user.user.userkey },
          url: `${globalVars.serverURL}/fields/`,
          data: editedField,
          responseType: "json"
        });
        const data = await res.data;
        if (data.msg === globalVars.msgSuccess) {
          reset();
        }
      };
      state.some(field => field._id === editedField._id)
        ? fieldIsUpdated()
        : fieldIsCreated();
    }
  };

  const reset = () => {
    setDisplayComponent(false);
    addField(dispatch, editedField);
    setEditedField({ type: "clear" });
  };

  const deleteFieldRes = async (id: any) => {
    const res = await axios({
      method: "DELETE",
      params: { key: user.user.userkey },
      url: `${globalVars.serverURL}/fields/${id}`,
      responseType: "json"
    });
    const resData = await res.data;
    resData.msg === globalVars.msgSuccess ? deleteField(dispatch, id) : null;
  };

  return (
    <Box mt="1rem" mb="5rem">
      <CustomFieldsList
        deleteFieldRes={deleteFieldRes}
        state={state}
        setupEditedField={fieldMethods.setupEditedField}
      />
      <AddOrEditField
        editedField={editedField}
        displayComponent={displayComponent}
        fieldMethods={fieldMethods}
        handleOption={
          <SelectFieldOptions
            options={editedField.fieldOptions}
            fieldMethods={fieldMethods}
          />
        }
      />
    </Box>
  );
};

export default CustomFields;
