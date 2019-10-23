import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ShowRecordsNumber from "../components/ShowRecordsNumber";
import LoadingSpinner from "../components/LoadingSpinner";
import globalVars from "../library/globalVariables";
import stringMethods from "../library/stringMethods";
import languages from "../library/languages";

const Dashboard = ({ clientData, fieldData, emailsData }: any) => {
  const router = useRouter();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const title = new stringMethods(router.pathname)
      .removeSlash()
      .firstCharUpperCase()
      .addStringToEnd(globalVars.titleSubText)
      .getString();
    document.title = title;
    setInitialized(true);
  }, [router]);

  const h1 = new stringMethods(router.pathname)
    .removeSlash()
    .firstCharUpperCase()
    .getString();

  return !initialized ? (
    <LoadingSpinner />
  ) : (
    <div>
      <Header />
      <h1>{h1}</h1>
      <ShowRecordsNumber
        data={clientData.data}
        string={languages.en.clientsSaved}
        buttonString={languages.en.clients}
        link={"/clients"}
      />
      <ShowRecordsNumber
        data={fieldData}
        string={languages.en.fieldsSaved}
        buttonString={languages.en.customClientFields}
        link={"/settings"}
      />
      <ShowRecordsNumber
        data={emailsData}
        string={languages.en.emailsSent}
        buttonString={languages.en.emails}
        link={"/emails"}
      />
    </div>
  );
};

Dashboard.getInitialProps = async () => {
  const resClientCount = await axios({
    method: "GET",
    url: `${globalVars.serverURL}/clients/count`,
    responseType: "json"
  });
  const clientData = await resClientCount.data;

  const resFieldsData = await axios({
    method: "GET",
    url: `${globalVars.serverURL}/fields/count`,
    responseType: "json"
  });
  const fieldData = await resFieldsData.data;

  const resEmailsCount = await axios({
    method: "GET",
    url: `${globalVars.serverURL}/emails/count`,
    responseType: "json"
  })
  const emailsData = await resEmailsCount.data;


  return { clientData, fieldData, emailsData };
};

export default Dashboard;
