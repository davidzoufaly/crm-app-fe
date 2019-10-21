import languages from "../../library/languages";
import Typography from "@material-ui/core/Typography";

const DefaultClientFields = ({ fields }: any) => {
  const defaultFieldNames = fields
    .filter(({ fieldPermanent }: any) => fieldPermanent === true)
    .map(({ fieldName, _id }: any) => {

      return (
        <div key={_id}><p>{fieldName}</p></div>
      );
    });

  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>{languages.en.defaultClientFields}</Typography>
      <div>{defaultFieldNames}</div>
    </div>
  );
};

export default DefaultClientFields;
