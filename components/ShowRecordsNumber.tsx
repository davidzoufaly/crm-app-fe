import Link from "next/link";
import languages from "../library/languages";

const ShowRecordsNumber = ({data, string, buttonString, link } : any) => {

  return (
    <div>
      <h2>{data}</h2>
      <p>{string}</p>
      <Link href={link}>
        <a>{languages.en.goTo} {buttonString.toLowerCase()}</a>
      </Link>
    </div>
  );
};

export default ShowRecordsNumber;
