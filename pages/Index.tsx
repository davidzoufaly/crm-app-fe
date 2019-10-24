import { useContext } from "react";
import Link from "next/link"
import LoginForm from "../components/homepage/LoginForm";
import RegisterForm from "../components/homepage/RegisterForm";
import UserContext from "../components/UserContext";
import languages from "../library/languages";

const Index = () => {
  const user = useContext(UserContext);

  return !user.user.signedIn
    ? (
    <div>
      <h1>Welcome in my CRM-APP</h1>
      <LoginForm />
      <RegisterForm />
    </div>
    )
    : (
      <>
      <Link href="/dashboard" as={`/dashboard?Api_KEY=${user.user.userkey}`}>
        <a>{languages.en.goTo} {languages.en.dashboard}</a>
      </Link>
      <button onClick={() => user.logoutUser()}>{languages.en.logout}</button>
      </>
    )
};

export default Index;
