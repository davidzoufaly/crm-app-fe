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
          <Link href="/dashboard" as={`/dashboard?Api_KEY=${user.user.userkey}`}>
            <a>{languages.en.dashboard}</a>
          </Link>
        </li>
        <li>
          <Link href="/clients" as={`/clients?Api_KEY=${user.user.userkey}`}>
            <a>{languages.en.clients}</a>
          </Link>
        </li>
        <li>
          <Link href="/emails" as={`/emails?Api_KEY=${user.user.userkey}`}>
            <a>{languages.en.emails}</a>
          </Link>
        </li>
        <li>
          <Link href="/settings" as={`/settings?Api_KEY=${user.user.userkey}`}>
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
