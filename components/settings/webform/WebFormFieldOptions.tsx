import globalVars from "../../../library/globalVariables";

const WebFormFieldOptions = ({ webFields }) => {
  const options = webFields.map(field => field.pause ? field.fieldOptions.map(option => (
    <option key={option.id} value={option.value}>
      {option.value}
    </option>
  )) : null)

  return (
    <>
      <option key={globalVars.blankOption}>{globalVars.blankOption}</option>
      {options}
    </>
  )
};

export default WebFormFieldOptions;
