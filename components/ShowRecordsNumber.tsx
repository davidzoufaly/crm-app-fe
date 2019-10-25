import Link from "next/link";
import UserContext from "../components/UserContext";
import languages from "../library/languages";
import { useContext } from "react";

const ShowRecordsNumber = ({data, string, buttonString, link, subData } : any) => {
  const user = useContext(UserContext)

  return (
    <div>
      <h2>{data}</h2>
      <p>{string}</p>
      <p>{subData}</p>
      <Link href={`${link}/[key]`} as={`${link}/${user.user.userkey}`}>
        <a>{languages.en.goTo} {buttonString.toLowerCase()}</a>
      </Link>
    </div>
  );
};

export default ShowRecordsNumber;
