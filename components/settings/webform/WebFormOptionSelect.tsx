import { useState } from "react";

const webFormOptionSelect = ({ webFields, addVisibleSelect, WebFormOptions }) => {
  const [showOptions, setShowOptions] = useState(false);

  const showOptionsOnClick = () => {
    setShowOptions(true);
  };

  const insertIntoForm = webFields.map(field =>
    !showOptions ? (
      field.pause ? (
        <div key={field._id}>
          <p>
            Should be <strong>{field.fieldName}</strong> visible in form?
          </p>
          <button id={field.fieldName} onClick={addVisibleSelect}>
            YES
          </button>
          <button onClick={showOptionsOnClick}>NO</button>
        </div>
      ) : null
    ) : null
  );

  return (
    <>
      {insertIntoForm}
      {showOptions && webFields.some(e => e.pause) ? (
        <>
          <p>
            Please select option, that will be auto assigned to clients from
            this form
          </p>
          {WebFormOptions}
        </>
      ) : null}
    </>
  );
};

export default webFormOptionSelect;
