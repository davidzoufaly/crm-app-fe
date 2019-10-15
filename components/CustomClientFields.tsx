import { useState } from "react";
import AddOrEditField from "../components/AddOrEditField";
import axios from "axios";
import globalVars from "../library/globalVariables";
import uniqid from "uniqid";
import CustomFieldsList from "./CustomFieldsList";

const CustomClientFields = ({ fields, refreshList }: any) => {
  const blankFieldObject = {
    fieldName: "",
    fieldType: "text",
    fieldOptions: []
  };

  const [editedField, setEditedField] = useState<any>(blankFieldObject);
  const [displayComponent, setDisplayComponent] = useState(false);

  const saveEditedField = () => {
    const fieldIsUpdated = async () => {
      const {fieldName, fieldType, fieldOptions, id} = editedField;
      const res = await axios({
        method: "put",
        url: `${globalVars.serverURL}/fields/${id}`,
        data: {fieldName, fieldType, fieldOptions},
        responseType: "json"
      });
      const data = await res.data;
      if(data.msg === "Success") {
        setDisplayComponent(false);
        setEditedField(blankFieldObject);
        refreshList();
      }
    }

    const fieldIsCreated = async () => {
      const res = await axios({
        method: "post",
        url: `${globalVars.serverURL}/fields/`,
        data: editedField,
        responseType: "json"
      });
      const data = await res.data;
      if(data.msg === "Success") {
        refreshList();
        setDisplayComponent(false);
        setEditedField(blankFieldObject);
      }
    }
    !editedField.id ? fieldIsCreated() : fieldIsUpdated();
  };

  const deleteField = async (event: any) => {
    const id = event.target.id;
    const res = await axios({
      method: "delete",
      url: `${globalVars.serverURL}/fields/${id}`,
      responseType: "json"
    });
    const resData = await res.data;
    resData.msg === "Success" ? refreshList() : null;
  };

  const onNameChange = (event: any) => {
    setEditedField({ ...editedField, fieldName: event.target.value });
  };

  const onSelectChange = (event: any) => {
    setEditedField({
      ...editedField,
      fieldType: event.target.options[event.target.options.selectedIndex].value
    });
  };

  const handleOptionSpawn = () => {
    setEditedField({
      ...editedField,
      fieldOptions: [...editedField.fieldOptions, { id: uniqid(), value: "" }]
    });
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

  const setupEditedField = (obj?: any) => {
    setEditedField(obj);
    setDisplayComponent(true);
  };

  const changeDisplayComponent = () => {
    displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
  }

  return (
    <div>
      <h2>Custom Client Fields</h2>
      <CustomFieldsList
        deleteField={deleteField}
        fields={fields}
        setupEditedField={setupEditedField}
      />
      <AddOrEditField
        editedField={editedField}
        refreshList={refreshList}
        saveEditedField={saveEditedField}
        onNameChange={onNameChange}
        onSelectChange={onSelectChange}
        handleOptionSpawn={handleOptionSpawn}
        onOptionChange={onOptionChange}
        onOptionDelete={onOptionDelete}
        displayComponent={displayComponent}
        changeDisplayComponent={changeDisplayComponent}
      />
    </div>
  );
};

export default CustomClientFields;
