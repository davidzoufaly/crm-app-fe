import languages from "../../../library/languages";

const WebFormList = ({ webFields, removeFromList }) => {
  const list = [];
  webFields
    .map(
      ({
        _id,
        fieldName,
        fieldInForm,
        fieldFormVisible,
        fieldOptions,
        fieldType,
        order
      }) =>
        fieldInForm
          ? (list[order] = (
              <li key={_id}>
                {fieldName}
                {fieldFormVisible
                  ? ` -> visible in form`
                  : fieldType === "select"
                  ? ` -> hidden in form with ${fieldOptions.map(e =>
                      e.preselected ? e.value : null
                    )} as preselected!`
                  : null}

                <button id={fieldName} onClick={removeFromList}>
                  X
                </button>
              </li>
            ))
          : []
    );

  return <ul>{list}</ul>;
};

export default WebFormList;
