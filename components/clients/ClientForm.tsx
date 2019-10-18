import stringMethods from "../../library/stringMethods";

const ClientForm = ({ fields, onChange, newClient }: any) => {
  const inputs = fields.map((e: any) => {
    if (e.fieldName !== "dateAdded" && e.fieldName !== "dateModified") {
      if (e.fieldType === "text") {
        return (
          <div key={e.fieldName}>
            <p>
              {new stringMethods(e.fieldName)
                .camelStringToText()
                .firstCharUpperCase()
                .getString()}
            </p>
            <input
              type="text"
              name={e.fieldName}
              onChange={() => onChange(e.fieldName, e.fieldType, event)}
              value={newClient[e.fieldName]}
            />
          </div>
        );
      } else if (e.fieldType === "number") {
        return (
          <div key={e.fieldName}>
            <p>{e.fieldName}</p>
            <input
              type="number"
              name={e.fieldName}
              onChange={() => onChange(e.fieldName, e.fieldType, event)}
            />
          </div>
        );
      } else if (e.fieldType === "select") {
        return (
          <div key={e.fieldName}>
            <p>{e.fieldName}</p>
            <select
              name={e.fieldName}
              onChange={() => onChange(e.fieldName, e.fieldType, event)}
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
