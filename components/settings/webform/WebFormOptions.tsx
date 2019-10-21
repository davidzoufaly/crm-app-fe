import globalVars from "../../../library/globalVariables";

const WebFormOptions = ({ addHiddenSelect, webFields }) => {
  const options = webFields.map(field => field.pause ? field.fieldOptions.map(option => (
    <option key={option.id} value={option.value}>
      {option.value}
    </option>
  )) : null)

  return (
    <select onChange={addHiddenSelect}>
      <option key={globalVars.blankOption}>{globalVars.blankOption}</option>
      {options}
    </select>
  )
};

export default WebFormOptions;
