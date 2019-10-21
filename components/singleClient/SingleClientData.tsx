import globalVars from "../../library/globalVariables";

const SingleClientData = ({ fieldsData, client, onInputChange }: any) =>
  fieldsData.map(field => {
    switch (field.fieldType) {
      case "text":
        return (
          <div key={field.fieldName}>
            {field.fieldName}
            <textarea name={field.fieldName} value={client[field.fieldName]} onChange={onInputChange} disabled={field.fieldName === "dateAdded" || field.fieldName === "lastModified"}/>
          </div>
        );
      case "number":
        return (
          <div key={field.fieldName}>
            {field.fieldName}
            <input type="number" name={field.fieldName} value={client[field.fieldName]} onChange={onInputChange}/>
          </div>
        );
      case "select":
        return (
          <div key={field.fieldName}>
            {field.fieldName}
            <select name={field.fieldName} value={client[field.fieldName]} onChange={onInputChange}>
                <option key="---">{globalVars.blankOption}</option>
              {field.fieldOptions.map(option => (
                <option key={option.id}>{option.value}</option>
              ))}
            </select>
          </div>
        );
    }
  });

export default SingleClientData;
