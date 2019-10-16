import { useState } from "react";
import AddOrEditField from "./AddOrEditField";
import axios from "axios";
import globalVars from "../library/globalVariables";
import uniqid from "uniqid";
import CustomFieldsList from "./CustomFieldsList";
import Typography from "@material-ui/core/Typography";
import SelectFieldOptions from "./SelectFieldOptions";

//TODO: EDIT OPTIONU SE PRERENDEROVAVA
//TODO: TO much baskspace u optionu uplne odstraní pole

const CustomClientFields = ({ fields, refreshList }: any) => {
  const blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldOptions: []
  };

  const [editedField, setEditedField] = useState<any>(blankFieldObject);
  const [displayComponent, setDisplayComponent] = useState(false);

  const fieldMethods = {
    onNameChange(event: any) {
      setEditedField({ ...editedField, fieldName: event.target.value });
    },
    onSelectChange(event: any) {
      setEditedField({
        ...editedField,
        fieldType:
          event.target.options[event.target.options.selectedIndex].value
      });
    },
    handleOptionSpawn() {
      setEditedField({
        ...editedField,
        fieldOptions: [...editedField.fieldOptions, { id: uniqid(), value: "" }]
      });
    },
    toggleDisplayComponent() {
      displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
      setEditedField(blankFieldObject);
    },
    saveEditedField() {
      const fieldIsUpdated = async () => {
        const { fieldName, fieldType, fieldOptions, id } = editedField;
        const res = await axios({
          method: "put",
          url: `${globalVars.serverURL}/fields/${id}`,
          data: { fieldName, fieldType, fieldOptions },
          responseType: "json"
        });
        const data = await res.data;
        if (data.msg === "Success") {
          reset();
        }
      };

      const fieldIsCreated = async () => {
        const res = await axios({
          method: "post",
          url: `${globalVars.serverURL}/fields/`,
          data: editedField,
          responseType: "json"
        });
        const data = await res.data;
        if (data.msg === "Success") {
          reset();
        }
      };
      !editedField.id ? fieldIsCreated() : fieldIsUpdated();
    }
  };

  const reset = () => {
    setDisplayComponent(false);
    setEditedField(blankFieldObject);
    refreshList();
  };

  const deleteField = async (id: any) => {
    const res = await axios({
      method: "delete",
      url: `${globalVars.serverURL}/fields/${id}`,
      responseType: "json"
    });
    const resData = await res.data;
    resData.msg === "Success" ? refreshList() : null;
  };

  const onOptionChange = (event: any) => {
    setEditedField({
      ...editedField,
      fieldOptions: editedField.fieldOptions.filter((e: any) =>
        event.target.id === e.id ? (e.value = event.target.value) : e
      )
    });
  };

  const onOptionDelete = (event: any) => {
    setEditedField({
      ...editedField,
      fieldOptions: editedField.fieldOptions.filter((e: any) =>
        event.target.id !== e.id ? e : null
      )
    });
  };

  const setupEditedField = (obj: any) => {
    setEditedField(obj);
    !displayComponent ? setDisplayComponent(true) : null;
  };

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Custom Client Fields
      </Typography>
      <CustomFieldsList
        deleteField={deleteField}
        fields={fields}
        setupEditedField={setupEditedField}
      />
      <AddOrEditField
        editedField={editedField}
        displayComponent={displayComponent}
        fieldMethods={fieldMethods}
        handleOption={
          <SelectFieldOptions
            options={editedField.fieldOptions}
            onOptionChange={onOptionChange}
            onOptionDelete={onOptionDelete}
          />
        }
      />
    </div>
  );
};

export default CustomClientFields;
