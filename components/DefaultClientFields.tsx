import stringMethods from "../library/stringMethods";

const DefaultClientFields = ({ fields }: any) => {
  const defaultFieldNames = fields
    .filter(({ fieldPermanent }: any) => fieldPermanent === true)
    .map(({ fieldName, _id }: any) => {
      const defaultFieldNameFormated = new stringMethods(fieldName)
        .camelStringToText()
        .firstCharUpperCase()
        .getString();

      return (
        <div key={_id}><p>{defaultFieldNameFormated}</p></div>
      );
    });

  return (
    <div>
      <h2>Default client fields</h2>
      <div>{defaultFieldNames}</div>
    </div>
  );
};

export default DefaultClientFields;
