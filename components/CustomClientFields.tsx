
import { useState } from "react";
import AddOrEditField from "../components/AddOrEditField";
import axios from "axios";
import globalVars from "../library/globalVariables";
import CustomFields from "../components/CustomFields";

const CustomClientFields = ({ fields, refreshList }: any) => {
  const [displayComponent, setDisplayComponent] = useState(false);
  const [editedField, setEditedField] = useState({
    fieldName: "",
    fieldType: "text",
    fieldPermanent: false,
    fieldOptions: []
  })

  const deleteField = async (event : any) => {
    const id = event.target.id;
    const res = await axios({
        method: "delete",
        url:`${globalVars.serverURL}/fields/${id}`,
        responseType: "json"
    })
    const resData = await res.data;
    resData.msg === "Success" ? refreshList() : null;
  }

  const setupEditedField = (obj ? : any) => {
    setEditedField(obj);
    changeDisplayComponent()
  }

  const changeDisplayComponent = () => {
    displayComponent ? setDisplayComponent(false) : setDisplayComponent(true);
  }

  return (
    <div>
      <h2>Custom Client Fields</h2>
      <CustomFields deleteField={deleteField} setupEditedField={setEditedField}  fields={fields}/>
      {!displayComponent ? <button onClick={() => setupEditedField(editedField)}>Add new field</button> : <AddOrEditField fieldObject={editedField} setupEditedField={setupEditedField} refreshList={refreshList} changeDisplayComponent={changeDisplayComponent}/>}
    </div>
  );
};

export default CustomClientFields;
