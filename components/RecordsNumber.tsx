const RecordsNumber = (props : any) => {
  const numberOfRecords = props.data;

  return (
    <div>
      <h2>{numberOfRecords}</h2>
      <p>Saved {props.string}</p>
    </div>
  );
};

export default RecordsNumber;
