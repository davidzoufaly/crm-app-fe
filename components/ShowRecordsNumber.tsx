import Link from "next/link";

const ShowRecordsNumber = (props : any) => {
  const numberOfRecords = props.data;

  return (
    <div>
      <h2>{numberOfRecords}</h2>
      <p>Saved {props.string}</p>
      <Link href={props.link}>
        <a>Go to {props.string}</a>
      </Link>
    </div>
  );
};

export default ShowRecordsNumber;
