import Header from "../components/Header";
import globalVars from "../library/globalVariables";
import axios from "axios";
import generateUniqueId from "generate-unique-id";
import stringMethods from "../library/stringMethods";
import {useEffect, useState} from "react";
import LoadingSpinner from "../components/loadingSpinner";
import {useRouter} from "next/router"

const Emails = ({ data }) => {
    const [initialized, setInitialized] = useState(false)
    const router = useRouter();

    useEffect(() => {
        const title = new stringMethods(router.pathname)
          .removeSlash()
          .firstCharUpperCase()
          .addStringToEnd(globalVars.titleSubText)
          .getString();
        document.title = title;
        setInitialized(true);
      }, []);

  const tableBody = data.map(email => (
    <tr key={generateUniqueId()}>
      <td>{email.date}</td>
      <td>{email.to.map(e => <p key={generateUniqueId()}>{e}</p>)}</td>
      <td>{email.subject}</td>
      <td>{email.message}</td>
    </tr>
  ));

  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .firstCharUpperCase()
    .getString();

  return !initialized ? <LoadingSpinner/> : (
    <>
      <Header />
      <h1>{h1}</h1>
      <table>
        <thead>
          <tr>
            <td>Date and time</td>
            <td>To</td>
            <td>Subject</td>
            <td>Message</td>
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
