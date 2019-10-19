import stringMethods from "../../../library/stringMethods";
import Typography from "@material-ui/core/Typography";

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
      <Typography variant="h4" component="h2" gutterBottom>Default client fields</Typography>
      <div>{defaultFieldNames}</div>
    </div>
  );
};

export default DefaultClientFields;
