import { useState } from "react";
import SelectFieldOptions from "../components/SelectFieldOptions";
import uniqid from "uniqid";
import axios from "axios";
import globalVars from "../library/globalVariables";

const AddOrEditField = ({ fieldObject, changeDisplayComponent, refreshList }: any) => {
  const [updatedField, setUpdatedField] = useState(fieldObject);

  const saveField = async () => {

    const res = await axios({
      method: "post",
      url: `${globalVars.serverURL}/fields/`,
      data: updatedField,
      responseType: "json"
    });
    const data = await res.data;
    data.msg === "Success" ? changeDisplayComponent() : null;
    console.log(fieldObject);
    refreshList();
  };

  const onNameChange = (event: any) => {
    setUpdatedField({ ...updatedField, fieldName: event.target.value});
    console.log(updatedField);
  };

  const onSelectChange = (event: any) => {
    setUpdatedField({
      ...updatedField,
      fieldType: event.target.options[event.target.options.selectedIndex].value
    });
  };

  const handleOptionSpawn = () => {
    setUpdatedField({
      ...updatedField,
      fieldOptions: [...updatedField.fieldOptions, { id: uniqid(), value: "" }]
    });
  };

  const onChange = (event: any) => {
    setUpdatedField({
      ...updatedField,
      fieldOptions: updatedField.fieldOptions.filter((e: any) =>
        event.target.id === e.id ? (e.value = event.target.value) : e
      )
    });
  };

  const onDelete = (event: any) => {
    setUpdatedField({
      ...updatedField,
      fieldOptions: updatedField.fieldOptions.filter((e: any) =>
        event.target.id !== e.id ? e : null
      )
    });
  };

  return (
    <div>
      <label htmlFor="field-name">Field name</label>
      <input
        type="text"
        id="field-name"
        defaultValue={updatedField.fieldName}
        onChange={onNameChange}
      />
      <label htmlFor="field-type">Field type</label>
      <select id="field-type" onChange={onSelectChange} defaultValue={updatedField.fieldType}> 
        <option value="text">Text</option>
        <option value="select">Select</option>
        <option value="number">Number</option>
      </select>
      <SelectFieldOptions
        options={updatedField.fieldOptions}
        onChange={onChange}
        onDelete={onDelete}
      />
      {updatedField.fieldType === "select" ? (
        <button onClick={handleOptionSpawn}>New</button>
      ) : null}
      <button onClick={saveField}>Save</button>
      <button onClick={changeDisplayComponent}>Cancel</button>
    </div>
  );
};

export default AddOrEditField;
