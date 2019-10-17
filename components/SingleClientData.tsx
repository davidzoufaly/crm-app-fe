import stringMethods from "../library/stringMethods";

const SingleClientData = ({ fieldsData, client, onInputChange }: any) =>
  fieldsData.map(field => {
    switch (field.fieldType) {
      case "text":
        return (
          <li key={field.fieldName}>
            {new stringMethods(field.fieldName)
              .camelStringToText()
              .firstCharUpperCase()
              .getString()}
            <textarea name={field.fieldName} value={client[field.fieldName]} onChange={onInputChange}/>
          </li>
        );
      case "number":
        return (
          <li key={field.fieldName}>
            {new stringMethods(field.fieldName)
              .camelStringToText()
              .firstCharUpperCase()
              .getString()}
            <input type="number" name={field.fieldName} value={client[field.fieldName]} onChange={onInputChange}/>
          </li>
        );
      case "select":
        return (
          <li key={field.fieldName}>
            {new stringMethods(field.fieldName)
              .camelStringToText()
              .firstCharUpperCase()
              .getString()}
            <select name={field.fieldName} value={client[field.fieldName]} onChange={onInputChange}>
              {field.fieldOptions.map(option => (
                <option key={option.id}>{option.value}</option>
              ))}
            </select>
          </li>
        );
    }
  });

export default SingleClientData;
