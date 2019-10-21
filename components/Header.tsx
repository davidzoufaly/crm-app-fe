import Link from "next/link";
import languages from "../library/languages";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/dashboard">
            <a>{languages.en.dashboard}</a>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <a>{languages.en.clients}</a>
          </Link>
        </li>
        <li>
          <Link href="/emails">
            <a>{languages.en.emails}</a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a>{languages.en.settings}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
