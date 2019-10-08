import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/clients">
            <a>Clients list</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
