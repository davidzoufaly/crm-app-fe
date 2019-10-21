import Link from "next/link";
import languages from "../library/languages";

const ShowRecordsNumber = (props : any) => {
  const numberOfRecords = props.data;

  return (
    <div>
      <h2>{numberOfRecords}</h2>
      <p>{languages.en.saved} {props.string}</p>
      <Link href={props.link}>
        <a>{languages.en.goTo} {props.string}</a>
      </Link>
    </div>
  );
};

export default ShowRecordsNumber;
