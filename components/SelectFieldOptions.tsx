const SelectFieldOptions = ({ options, onChange, onDelete }: any) => {
  let items = options.map((e: any) => {
    return (
      <div key={e.id}>
        <input type="text" onChange={onChange} id={e.id} />
        <button id={e.id} onClick={onDelete}>
          X
        </button>
      </div>
    );
  });

  return <div>{items}</div>;
};
export default SelectFieldOptions;
