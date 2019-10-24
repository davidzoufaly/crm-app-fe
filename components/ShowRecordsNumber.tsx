import Link from "next/link";
import languages from "../library/languages";

const ShowRecordsNumber = ({data, string, buttonString, link, subData } : any) => {

  return (
    <div>
      <h2>{data}</h2>
      <p>{string}</p>
      <p>{subData}</p>
      <Link href={link}>
        <a>{languages.en.goTo} {buttonString.toLowerCase()}</a>
      </Link>
    </div>
  );
};

export default ShowRecordsNumber;
