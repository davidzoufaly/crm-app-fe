import { useContext } from "react";
import Link from "next/link";
import languages from "../library/languages";
import UserContext from "./UserContext";

const Header = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <ul>
        <li>
          <Link href="/dashboard/[key]" as={`/dashboard/${user.user.userkey}`}>
            <a>{languages.en.dashboard}</a>
          </Link>
        </li>
        <li>
          <Link href="/clients/[key]" as={`/clients/${user.user.userkey}`}>
            <a>{languages.en.clients}</a>
          </Link>
        </li>
        <li>
          <Link href="/emails/[key]" as={`/emails/${user.user.userkey}`}>
            <a>{languages.en.emails}</a>
          </Link>
        </li>
        <li>
          <Link href="/settings/[key]" as={`/settings/${user.user.userkey}`}>
            <a>{languages.en.settings}</a>
          </Link>
        </li>
        <li>
          <button onClick={() => user.logoutUser()}>{languages.en.logout}</button>
        </li>
      </ul>
    </div>
  )
};

export default Header;
