import stringMethods from "../../library/stringMethods";

const ClientForm = ({ fields, onChange, newClient }: any) => {
  const inputs = fields.map((e: any) => {
    if (e.fieldName !== "dateAdded" && e.fieldName !== "lastModified") {
      if (e.fieldType === "text") {
        return (
          <div key={e.fieldName}>
            <label htmlFor={e.fieldName}>
              {new stringMethods(e.fieldName)
                .camelStringToText()
                .firstCharUpperCase()
                .getString()}
            </label>
            <input
              type="text"
              id={e.fieldName}
              autoFocus={e.fieldName === "firstName"}
              name={e.fieldName}
              onChange={() => onChange(e.fieldType, event)}
              defaultValue={newClient[e.fieldName]}
            />
          </div>
        );
      } else if (e.fieldType === "number") {
        return (
          <div key={e.fieldName}>
            <label htmlFor={e.fieldName}>
              {" "}
              {new stringMethods(e.fieldName)
                .camelStringToText()
                .firstCharUpperCase()
                .getString()}
            </label>
            <input
              id={e.fieldName}
              type="number"
              name={e.fieldName}
              onChange={() => onChange(e.fieldType, event)}
              defaultValue={newClient[e.fieldName]}
            />
          </div>
        );
      } else if (e.fieldType === "select") {
        return (
          <div key={e.fieldName}>
            <label htmlFor={e.fieldName}>
              {" "}
              {new stringMethods(e.fieldName)
                .camelStringToText()
                .firstCharUpperCase()
                .getString()}
            </label>
            <select
              id={e.fieldName}
              name={e.fieldName}
              onChange={() => onChange(e.fieldType, event)}
              defaultValue={newClient[e.fieldName]}
            >
              <option>---</option>
              {e.fieldOptions.map((e: any) => {
                return (
                  <option value={e.value} key={e.id}>
                    {e.value}
                  </option>
                );
              })}
            </select>
          </div>
        );
      }
    }
  });
  return <div>{inputs}</div>;
};

export default ClientForm;
