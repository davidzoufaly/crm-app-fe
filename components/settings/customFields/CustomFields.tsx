import { useState, useReducer, useEffect } from "react";
import axios from "axios";
import uniqid from "uniqid";
import AddOrEditField from "./AddOrEditField";
import CustomFieldsList from "./CustomFieldsList";
import SelectFieldOptions from "./SelectFieldOptions";
import languages from "../../../library/languages";
import globalVars from "../../../library/globalVariables";
import Typography from "@material-ui/core/Typography";

const CustomClientFields = ({ fields, refreshList }: any) => {
  const blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldOptions: [],
    fieldFormVisible: null
  };

  useEffect(() => {
    // console.log(fields);
  });

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
          fieldType:
            action.payload.options[action.payload.options.selectedIndex].value
        };
      case "newOptionSpawn":
        return {
          ...state,
          fieldOptions: [...state.fieldOptions, { id: uniqid(), value: ""}]
        };
      case "clear":
        return blankFieldObject;
      case "optionValueChange":
        return {
          ...state,
          fieldOptions: state.fieldOptions.map((el: any) =>
            el.id === action.payload.id
              ? {...el, value: action.payload.value}
              : el
          )
        };
      case "optionDelete":
        return {
          ...state,
          fieldOptions: state.fieldOptions.filter(
            (e: any) => action.payload.id !== e.id
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
        payload: { options: event.target.options }
      });
    },
    handleOptionSpawn(e) {
      e.preventDefault()
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
        payload: { id: event.target.id }
      });
    },
    onOptionChange(id, event) {
      setEditedField({
        type: "optionValueChange",
        payload: { value : event.target.value, id }
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
        const { fieldName, fieldType, fieldOptions, id } = editedField;
        const res = await axios({
          method: "PUT",
          url: `${globalVars.serverURL}/fields/${id}`,
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
          url: `${globalVars.serverURL}/fields/`,
          data: editedField,
          responseType: "json"
        });
        const data = await res.data;
        if (data.msg === globalVars.msgSuccess) {
          reset();
        }
      };
      !editedField.id ? fieldIsCreated() : fieldIsUpdated();
    }
  };

  const reset = () => {
    setDisplayComponent(false);
    setEditedField({ type: "clear" });
    refreshList();
  };

  const deleteField = async (id: any) => {
    const res = await axios({
      method: "DELETE",
      url: `${globalVars.serverURL}/fields/${id}`,
      responseType: "json"
    });
    const resData = await res.data;
    resData.msg === globalVars.msgSuccess ? refreshList() : null;
  };


  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        {languages.en.customClientFields}
      </Typography>
      <CustomFieldsList
        deleteField={deleteField}
        fields={fields}
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
    </div>
  );
};

export default CustomClientFields;
