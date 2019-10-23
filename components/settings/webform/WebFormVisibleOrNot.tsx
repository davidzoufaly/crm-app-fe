import languages from "../../../library/languages"

const WebFormVisibleOrNot = ({ webFields, addVisibleSelect, showOptionsOnClick } : any) => {

  const VisibleOrNot = webFields.map(({fieldName, fieldFormVisible, _id, pause}) =>
    fieldFormVisible === null ? (
      pause ? (
        <div key={_id}>
          <p>
            {languages.en.shouldBe} <strong>{fieldName}</strong> {languages.en.visibleInForm}?
          </p>
          <button id={fieldName} onClick={addVisibleSelect}>
            {languages.en.yes}
          </button>
          <button onClick={showOptionsOnClick}>{languages.en.no}</button>
        </div>
      ) : null
    ) : null
  );

  return (
    <>
    {VisibleOrNot}
    </>
  );
};

export default WebFormVisibleOrNot;
