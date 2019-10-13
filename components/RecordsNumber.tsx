const RecordsNumber = (props : any) => {
  const numberOfRecords = props.data;

  return (
    <div>
      <h2>{numberOfRecords}</h2>
      <p>Saved {numberOfRecords > 1 ? "records" : "record"}</p>
    </div>
  );
};

export default RecordsNumber;
