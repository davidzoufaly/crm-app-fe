const SelectFieldOptions = ({ options, fieldMethods }: any) => {
  const items = options.map((e: any) => {
    return (
      <div key={e.id}>
        <input type="text" onChange={() => fieldMethods.onOptionChange(e.id, event)} value={e.value} />
        <button id={e.id} onClick={fieldMethods.onOptionDelete}>
          X
        </button>
      </div>
    );
  });
  return <div>{items}<button onClick={fieldMethods.handleOptionSpawn}>New</button></div>;
};
export default SelectFieldOptions;
