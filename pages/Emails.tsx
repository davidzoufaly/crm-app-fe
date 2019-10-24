import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import generateUniqueId from "generate-unique-id";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import CountContext from "../components/CountContext";
import UserContext from "../components/UserContext";
import stringMethods from "../library/stringMethods";
import globalVars from "../library/globalVariables";
import languages from "../library/languages";

const Emails = props => {
  const { emailsCounter } = useContext(CountContext);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();
  const user = useContext(UserContext);

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();
    document.title = title;
    setInitialized(true);
    user.checkUser();
  }, [router]);

  const tableBody = props.data
    .map(email => (
      <tr key={generateUniqueId()}>
        <td>{email.date}</td>
        <td>
          {email.to.map(e => (
            <p key={generateUniqueId()}>{e}</p>
          ))}
        </td>
        <td>{email.subject}</td>
        <td>
          {email.message.length > 50
            ? `${email.message.slice(0, 50)}...`
            : email.message}
        </td>
      </tr>
    ))
    .reverse();

  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .firstCharUpperCase()
    .getString();

  return !user.user.signedIn && !initialized ? (
    <LoadingSpinner />
  ) : (
    <>
      <Header />
      <h1>{h1}</h1>
      <p>{emailsCounter}</p>
      <table>
        <thead>
          <tr>
            <td>{languages.en.dateAndTime}</td>
            <td>{languages.en.to}</td>
            <td>{languages.en.subject}</td>
            <td>{languages.en.message}</td>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </>
  );
};

Emails.getInitialProps = async () => {
  const res = await axios({
    method: "get",
    url: `${globalVars.serverURL}/emails`,
    responseType: "json"
  });
  const data = await res.data;
  return { data };
};

export default Emails;
