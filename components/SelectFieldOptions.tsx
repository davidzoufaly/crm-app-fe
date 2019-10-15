const SelectFieldOptions = ({ options, onOptionChange, onOptionDelete }: any) => {
  let items = options.map((e: any) => {
    return (
      <div key={e.id}>
        <input type="text" onChange={onOptionChange} id={e.id} defaultValue={e.value} />
        <button id={e.id} onClick={onOptionDelete}>
          X
        </button>
      </div>
    );
  });

  return <div>{items}</div>;
};
export default SelectFieldOptions;
